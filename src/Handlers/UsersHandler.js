const { getUsers, getUserLogin, getUserById, postUser, deleteUser, postUserGoogle } = require("../Controllers/UsersController");

//Get Users
const getUsersHandler = async (req, res) => {
  //return res.status(200).send("Get toDo")
  try {
    const resultado = await getUsers();
    return res.status(200).json(resultado)

  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
}

//Get - Login
const getUsersLoginHandler = async (req, res) => {
  //return res.status(200).send("Get Login User");
  try {
    const { email, password } = req.body
    //email = email.toLowerCase();
    const resultado = await getUserLogin(email.toLowerCase(), password);
    return res.status(200).json(resultado);

  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};


//Get User by id

const getUsersByIdHandler = async (req, res) => {
  //return res.status(200).send("Get toDo By User");
  try {
    const {id} = req.params
    const resultado = await getUserById(id);
    return res.status(200).json(resultado);

  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};


//Add a new User
const postUsersHandler = async (req, res) => {
  try {
    const { name, lastName, email, password, googleUser } = req.body;
    //email = email.toLowerCase();
    const resultado = await postUser(name, lastName, email.toLowerCase(), password, googleUser);
    return res.status(200).json(resultado);

  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

//Get or Add a new Google User
const postUserGoogleHandler = async (req, res) => {
  try {
    const { name, lastName, email, password} = req.body;
    const resultado = await postUserGoogle(name, lastName, email.toLowerCase(), password);
    return res.status(200).json(resultado);

  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};


//Delete a User
const deleteUsersHandler = async (req, res) => {
  try {
    const {id} = req.params
    const resultado = await deleteUser(id);
    return res.status(200).json(resultado);
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};
module.exports = {
  getUsersHandler,
  getUsersLoginHandler,
  getUsersByIdHandler,
  postUsersHandler,
  postUserGoogleHandler,
  deleteUsersHandler,
};

