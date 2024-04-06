//import and create router;
import { Router } from "express";
const Route = Router();
//import controllers;
import UserController from "#app/controllers/userController.js";
//import middleware;
import AuthMiddleware from "#app/middleware/auth.js";
import PageController from "#app/controllers/pageController.js";

//set middleware on auth;
Route.use("/auth", AuthMiddleware).post(
  "/auth/get-user",UserController.getUser
);
//login register;
Route.post("/login", UserController.login);
Route.post("/register", UserController.register);

//page router;
const PageRoute = Router();
PageRoute.post("/get-metadata", PageController.getMetadata);
PageRoute.post("/get-page", PageController.getPage);
Route.use("/page", PageRoute);

//return router;
export default Route;
