import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("projectsdb", "postgres", "qwerty", {
  host: "localhost",
  dialect: "postgres",
});
