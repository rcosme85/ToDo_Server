const Categories = require("../Models/Categories");
const todoList = require("../Models/todoList");

//Get All Categories
const getCategory = async () => {
  const response = await Categories.findAll();
  if (!response || !response.length) return { error: "There are no Categories" };
  return { data: response };
};


//POST - Add a new Category
const postCategory = async (id) => {

  const newCategory = await Categories.findOrCreate({
    where: {id}
  });

  if(!newCategory[1]) return { error: "Category already exists" };
  return { data: newCategory, msg: "Created a new Category" };
};

//DELETE
const deleteCategory = async (id) => {
  
  const category = await Categories.findByPk(id);
  if (!category) return { error: "Category does not exist" };

  const categoryDeleted = await Categories.destroy({
    where: {
      id: id,
    },
  });
  if (!categoryDeleted) return { error: "Category does not exist" };
  //Removes items from the to-do list
  await todoList.destroy({
    where: {
      CategoryId: null,
    },
  });
  return { data: category, msg: "Deleted Category" };
};

module.exports = {
  getCategory,
  postCategory,
  deleteCategory,
};
