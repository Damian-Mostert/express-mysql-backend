//LOAD ENV
import { createRequire } from "module";
const require = createRequire(import.meta.url);
require("dotenv").config({ path: ".env" });
//LOAD DATABASE
import knex from "knex";
import bookshelf from "bookshelf";
const Database = bookshelf(
  knex({
    client: process.env.DB_TYPE,
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      charset: "utf8",
    },
  })
);

export default Database;