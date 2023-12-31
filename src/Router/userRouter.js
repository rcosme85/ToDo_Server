const { Router } = require("express");
const { getUsersByIdHandler, getUsersHandler, postUsersHandler, deleteUsersHandler, getUsersLoginHandler, postUserGoogleHandler } = require("../Handlers/UsersHandler");

////http://localhost:3001/todoApp/users
const userRouter = Router()

userRouter.get("/", getUsersHandler);
userRouter.post("/login/", getUsersLoginHandler)
userRouter.post("/loginGoogle/", postUserGoogleHandler);
userRouter.get("/:id", getUsersByIdHandler);
userRouter.post("/", postUsersHandler);
userRouter.delete("/:id", deleteUsersHandler)

module.exports = userRouter