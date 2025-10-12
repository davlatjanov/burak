import { T } from "../libs/types/common";
import { Request, Response } from "express";

const memberController: T = {};

memberController.goHome = (req: Request, res: Response) => {
  try {
    console.log("Execution goHome");
    res.send("Home Page");
  } catch (err) {
    console.log("ERROR: goHome", err);
  }
};
memberController.login = (req: Request, res: Response) => {
  try {
    console.log("Execution login");
    res.send("Login Page");
  } catch (err) {
    console.log("ERROR: login", err);
  }
};
memberController.signup = (req: Request, res: Response) => {
  try {
    console.log("Execution signup");
    res.send("Signup Page");
  } catch (err) {
    console.log("ERROR: signup", err);
  }
};

export default memberController;
