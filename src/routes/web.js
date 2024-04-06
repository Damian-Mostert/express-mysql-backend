import { Router } from "express";
import ReactController from "#app/controllers/reactController.js";
const Route = Router();

Route.post("/login", ReactController.somePage);

export default Route;
