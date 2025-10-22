import { T } from "../libs/types/common";
import { Request, Response } from "express";
import MemberService from "../models/Member.service";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import Errors from "../libs/errors";

const restaurantController: T = {};
const memberService = new MemberService();

restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("Execution goHome restaurant");
    res.render("home");
  } catch (err) {
    console.log("ERROR: goHome restaurant", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

restaurantController.signup = (req: Request, res: Response) => {
  try {
    console.log("signup restaurant");
    res.render("signup");
  } catch (err) {
    console.log("ERROR: signup restaurant", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};
restaurantController.login = (req: Request, res: Response) => {
  try {
    console.log("login restaurant");
    res.render("login");
  } catch (err) {
    console.log("ERROR: login restaurant", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
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
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
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
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

export default restaurantController;
