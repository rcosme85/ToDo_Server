const { DataTypes} = require("sequelize");
const sequelize = require("../db");

const Categories = sequelize.define(
  "Categories",
  {
  
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
   
  },
  {
    timestamps: false,
  }
);

module.exports = Categories;
