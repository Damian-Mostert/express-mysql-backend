//LOAD ENV
import { createRequire } from "module";
const require = createRequire(import.meta.url);
require("dotenv").config({ path: ".env" });
//SERVER
import express from "express";
import session from "express-session";
//web and apis
import Web from "#routes/web.js";
import Api from "#routes/api.js";

const app = express();
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
  })
);
app.use("/api", Api);
//app.use(express.static("public"));
app.use(Web);

export function Serve() {
  app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}.`);
  });
}
