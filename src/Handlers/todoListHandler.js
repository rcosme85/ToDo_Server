const { getTodoList, getTodoListByUser, postTodoList, putTodoList, getTodoListByCategory, deleteTodo } = require("../Controllers/todoListController")

//Get toDo
const getTodoHandler = async (req, res) => {
  //return res.status(200).send("Get toDo")
  try {
    const resultado = await getTodoList();
    return res.status(200).json(resultado)

  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
}


//Get ToDo by User - view a list of TODO
const getTodoByUserHandler = async (req, res) => {
  //return res.status(200).send("Get toDo By User");
  try {
    const {UserId} = req.params
    const resultado = await getTodoListByUser(UserId);
    return res.status(200).json(resultado);
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};


//Add a new TODO
const postTodoHandler = async (req, res) => {
 // return res.status(200).send("Post toDo - New");
  try {
    const {CategoryId, title, description, UserId} = req.body
    const resultado = await postTodoList(
      CategoryId,
      title,
      description,
      UserId
    );
    return res.status(200).json(resultado);

  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

//Update an existing TODO item (title, description, category)
//Mark a TODO item as completed or incomplete
const putTodoHandler = async (req, res) => {
  //return res.status(200).send("Put toDo");
  try {
     const { id } = req.params;
     const { CategoryId, title, description, isComplete } = req.body;
    const resultado = await putTodoList(
      id,
      CategoryId,
      title,
      description,
      isComplete
    );
    return res.status(200).json(resultado);

  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};


//filter TODO items by category
const getTodoByCategoryHandler = async (req, res) => {
 // return res.status(200).send("get ToDo by category");
  try {
    const {UserId} = req.params
    const {CategoryId} = req.body
    const resultado = await getTodoListByCategory(UserId, CategoryId);
    return res.status(200).json(resultado);

  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};
//Delete a TODO item
const deleteTodoHandler = async (req, res) => {
  //return res.status(200).send("Delete toDo");
  try {
    const {id} = req.params
    const resultado = await deleteTodo(id);
    return res.status(200).json(resultado);
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};
module.exports = {
  getTodoHandler,
  getTodoByUserHandler,
  postTodoHandler,
  putTodoHandler,
  getTodoByCategoryHandler,
  deleteTodoHandler,
};

