import express from "express";
import restaurantController from "./controllers/restaurant.controller";
const routerAdmin = express.Router();

// RESTAURANT
routerAdmin.get("/", restaurantController.goHome);

routerAdmin
  .get("/login", restaurantController.login)
  .post("/login", restaurantController.processLogin);

routerAdmin
  .get("/signup", restaurantController.signup)
  .post("/signup", restaurantController.processSignup);

routerAdmin.get("/check-me", restaurantController.checkAuthSession);
routerAdmin.get("/logout", restaurantController.logout);

// PRODUCT
// USER
export default routerAdmin;
