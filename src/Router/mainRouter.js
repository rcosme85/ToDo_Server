const { Router } = require("express");
const todoRouter = require("./todoRouter");
const userRouter = require("./userRouter");
const categoryRouter = require("./categoryRouter");

const router = Router();

//Ruta base
//http://localhost:3001/todoApp

router.use("/todo", todoRouter);
router.use("/users", userRouter)
router.use("/category", categoryRouter)

module.exports = router;