const Categories = require("./Categories");
const Users = require("./Users");
const todoList = require("./todoList");


Users.hasMany(todoList);
//User.hasMany(TodoList, { as: "todoLists" });
todoList.belongsTo(Users)
//todoList.belongsTo(User, { as: "User" });

Categories.hasMany(todoList);
todoList.belongsTo(Categories)

module.exports = {todoList, Users, Categories }