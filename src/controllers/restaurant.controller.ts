import { T } from "../libs/types/common";
import { Request, Response } from "express";
import MemberService from "../models/Member.service";

const restaurantController: T = {};
const memberService = new MemberService();

restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("Execution goHome restaurant");
    res.send("Home Page restaurant");
  } catch (err) {
    console.log("ERROR: goHome restaurant", err);
  }
};
restaurantController.login = (req: Request, res: Response) => {
  try {
    console.log("Execution login restaurant");
    res.send("Login Page restaurant");
  } catch (err) {
    console.log("ERROR: login restaurant", err);
  }
};
restaurantController.signup = (req: Request, res: Response) => {
  try {
    console.log("Execution signup restaurant");
    res.send("Signup Page restaurant");
  } catch (err) {
    console.log("ERROR: signup restaurant", err);
  }
};

export default restaurantController;
