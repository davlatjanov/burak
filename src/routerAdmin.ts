import express from "express";
import restaurantController from "./controllers/restaurant.controller";
const routerAdmin = express.Router();

routerAdmin.get("/", restaurantController.goHome);
routerAdmin.get("/login", restaurantController.login);
routerAdmin.get("/signup", restaurantController.signup);

export default routerAdmin;
