const Users = require("../Models/Users");
const todoList = require("../Models/todoList")


const getTodoList = async () => {

  const findTodoList = await todoList.findAll({
    include: [
      {
        model: Users,
        attributes: ["name", "lastName", "email"]
      }
    ]
  });
  if (!findTodoList || !findTodoList.length)
    return { error: "There is no to-do list" };
  return {data: findTodoList}
}

//Get ToDo by User - view a list of TODO
const getTodoListByUser = async (UserId) => {
  const findTodoByUser = await todoList.findAll({
    where: { UserId: UserId },
    order: [["createdAt", "DESC"]],
  });
  
  if (!findTodoByUser || !findTodoByUser.length) 
    return { error: "There is no to-do list by User" };
    return { data: findTodoByUser };
}

//Add a new TODO
const postTodoList = async (CategoryId, title, description, UserId) => {
 
  const newTodo = await todoList.create({
      description: description,
      CategoryId: CategoryId,
      title: title,
    UserId: UserId,
  });
  
  return { data: newTodo, msg: "Created a new to-do item" };
}


//Update an existing TODO item (title, description, category)
//Mark a TODO item as completed or incomplete

const putTodoList = async (
  id,
  CategoryId,
  title,
  description,
  isComplete,
) => {
  const todo = await todoList.findByPk(id)
  if (!todo) return { error: "To-do item not found" };

  if (CategoryId) todo.CategoryId = CategoryId;
  if (title) todo.title = title;
  if (description) todo.description = description;

  if (isComplete && isComplete === true) {
    todo.isComplete = isComplete;
  } else {
    todo.isComplete = false;
  }

  await todo.save()

  return { data: todo, msg: "Updated to-do item" };
};


//filter TODO items by category
const getTodoListByCategory = async (UserId, CategoryId) => {
  const findTodoByCategory = await todoList.findAll({
    where: { UserId: UserId, CategoryId: CategoryId },
  });

  if (!findTodoByCategory || !findTodoByCategory.length)
    return { error: "There is no to-do list by Category" };
  return { data: findTodoByCategory };
};
//Delete a TODO item
const deleteTodo= async (id) => {
  const todoDeleted = await todoList.destroy({
    where: {
      id: id,
    },
  });
  if (!todoDeleted) return { error: "To-do item does not exist" };
  return { data: todoDeleted, msg: "Deleted to-do item" };
};

module.exports = {
  getTodoList,
  getTodoListByUser,
  postTodoList,
  putTodoList,
  getTodoListByCategory,
  deleteTodo
}

