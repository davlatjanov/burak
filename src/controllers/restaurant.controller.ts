import { T } from "../libs/types/common";
import { Request, Response } from "express";
import MemberService from "../models/Member.service";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

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

restaurantController.signup = (req: Request, res: Response) => {
  try {
    console.log("signup restaurant");
    res.send("Signup Page restaurant");
  } catch (err) {
    console.log("ERROR: signup restaurant", err);
  }
};
restaurantController.login = (req: Request, res: Response) => {
  try {
    console.log("login restaurant");
    res.send("Login Page restaurant");
  } catch (err) {
    console.log("ERROR: login restaurant", err);
  }
};

restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("processSignup restaurant");
    console.log("body", req.body);
    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;
    console.log("body2", newMember);
    const result = await memberService.processSignup(newMember);

    res.send(result);
  } catch (err) {
    console.log("ERROR: processSignup restaurant", err);
    res.send(err);
  }
};

restaurantController.processLogin = async (req: Request, res: Response) => {
  try {
    console.log("processLogin restaurant");
    const input: LoginInput = req.body;
    const result = await memberService.processLogin(input);
    res.send(result);
  } catch (err) {
    console.log("ERROR: processLogin restaurant", err);
    res.send(err);
  }
};

export default restaurantController;
