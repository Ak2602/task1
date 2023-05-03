import { con } from "../config/db.js";
import { DataTypes } from "sequelize";

export const users = con.define("usr", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

con
  .sync()
  .then(() => {
    console.log("Table created successfully...");
  })
  .catch((error) => {
    console.log("Creation Failed", error);
  });
