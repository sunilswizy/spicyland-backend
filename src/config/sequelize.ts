import { Dialect } from "sequelize";
import { Sequelize } from "sequelize-typescript";

const dbName = 'spicyland'
const dbUser = 'postgres'
const host = 'localhost'
const dbPass = 'root'
const dialect = 'postgres' as Dialect;

const sequelize = new Sequelize(dbName, dbUser, dbPass, {
    dialect,
    host,
    logging: true
});

export default sequelize;