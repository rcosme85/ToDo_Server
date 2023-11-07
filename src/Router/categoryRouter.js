const { Router } = require("express");
const { getCategoryHandler, postCategoryHandler, deleteCategoryHandler } = require("../Handlers/CategoryHandler");

//http://localhost:3001/todoApp/category
const categoryRouter = Router();

categoryRouter.get("/", getCategoryHandler);
categoryRouter.post("/", postCategoryHandler);
categoryRouter.delete("/", deleteCategoryHandler)

module.exports = categoryRouter