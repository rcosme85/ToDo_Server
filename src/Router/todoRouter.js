const { Router } = require("express");
const { getTodoHandler, getTodoByUserHandler, postTodoHandler, putTodoHandler, deleteTodoHandler, getTodoByCategoryHandler } = require("../Handlers/todoListHandler");

//http://localhost:3001/todoApp/todo/

const todoRouter = Router();

todoRouter.get("/", getTodoHandler);
todoRouter.get("/:UserId", getTodoByUserHandler);
todoRouter.post("/", postTodoHandler);
todoRouter.put("/:id", putTodoHandler);
todoRouter.delete("/:id", deleteTodoHandler);
todoRouter.post("/filter/:UserId", getTodoByCategoryHandler);

module.exports = todoRouter
