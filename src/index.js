const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const router = require("./Router/mainRouter");
const sequelize = require("./db");

const app = express();

const port = 3001;
const { todoList, Users, Categories } = require("./Models/Relations");

//MIDDLEWARES
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//Main Router
app.use("/todoApp", router);

//SEQUELIZE - alter:true // force:false
sequelize
  .sync({ alter: true })
  .then(() => {
    app.listen(port, () => {
      console.log("Server on PORT :" + port);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  res.status(status).send(message);
});
