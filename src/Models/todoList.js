const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const todoList = sequelize.define(
  "todoList",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    /* category: {
      type: DataTypes.STRING,
      allowNull: false,
    }, */
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    isComplete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = todoList;
