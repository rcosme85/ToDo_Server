const Users = require("../Models/Users");
const bcrypt = require("bcrypt");
const todoList = require("../Models/todoList");

//Get All Users
const getUsers = async () => {
  const response = await Users.findAll()
  if (!response || !response.length)
    return { error: "There are no Users" };
  return { data: response };
};

//GET - LOGIN
const getUserLogin = async (email, password) => {
  const findUserByEmail = await Users.findOne({
    where: { email: email},
  });

  if (!findUserByEmail)
    return { error: "Email is not correct" };
    
   const passwordMatch = await bcrypt.compare(
     password,
     findUserByEmail.password
   );
  if (passwordMatch) {
    return { data: findUserByEmail, msg: "Valid user" };
  }
   else {
     return { error: "Incorrect Password" };
   }
  //return {msg: "Falta comparar password"}
};

//GET USERS BY ID
const getUserById = async (id) => {
  const findUser = await Users.findOne({
    where: {
      id: id,
    },
  });
  if (!findUser) return { error: "User does not exist" };

  return { data: findUser };
};

//POST - Add a new User
const postUser = async (name, lastName, email, password, googleUser) => {
  const validateEmail = await Users.findAndCountAll({ where: { email } });

  if (validateEmail.count > 0) return { error: "email is not available" };

  // Genera el hash de la contraseña
   const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await Users.create({
    // id: id || "",
   // id: id,
    name: name,
    lastName: lastName,
    email,
    password: hashedPassword,
    //googleUser: googleUser || false,
    googleUser: googleUser
    
  });

  return { data: newUser, msg: "Created a new User" };
};


//DELETE
const deleteUser = async (id) => {
  // Eliminando de Firebase un usuario

  /* auth
    .deleteUser(id)
    .then(() => {
      console.log("Usuario eliminado con éxito.");
    })
    .catch((error) => {
      console.error("Error al eliminar el usuario:", error);
    }); */

  // Eliminando un usuario de la BD local

  const user = await Users.findByPk(id);
  if (!user) return { error: "User does not exist" };

  const userDeleted = await Users.destroy({
    where: {
      id: id,
    },
  });
  if (!userDeleted) return { error: "User does not exist" };
  //Removes items from the user's to-do list
  await todoList.destroy({
    where: {
      UserId: null,
    },
  });
  return { data: user, msg: "Deleted User" };
};

module.exports = {
  getUsers,
  getUserLogin,
  getUserById,
  postUser,
  deleteUser,
};