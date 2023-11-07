const { getCategory, postCategory, deleteCategory } = require("../Controllers/CategoryController");

//Get Categories
const getCategoryHandler = async (req, res) => {
  //return res.status(200).send("Get toDo")
  try {
    const resultado = await getCategory();
    return res.status(200).json(resultado);
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};


//Add a new Category
const postCategoryHandler = async (req, res) => {
  try {
    const { id } = req.body;
    //email = email.toLowerCase();
    const resultado = await postCategory(id);
    return res.status(200).json(resultado);
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

//Delete a Category
const deleteCategoryHandler = async (req, res) => {
  try {
    const { id } = req.body;
    const resultado = await deleteCategory(id);
    return res.status(200).json(resultado);
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

module.exports = {
  getCategoryHandler,
  postCategoryHandler,
  deleteCategoryHandler,
};