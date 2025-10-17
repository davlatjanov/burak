import { T } from "../libs/types/common";
import { Request, Response } from "express";
import MemberService from "../models/Member.service";
import { MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const restaurantController: T = {};
const memberService = new MemberService();

restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("Execution goHome restaurant");
    res.send("Home Page restaurant");

    /* Responses: send | json | redirect | render */
  } catch (err) {
    console.log("ERROR: goHome restaurant", err);
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
restaurantController.login = (req: Request, res: Response) => {
  try {
    console.log("Execution login restaurant");
    res.send("Login Page restaurant");
  } catch (err) {
    console.log("ERROR: login restaurant", err);
  }
};

restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("Execution processSignup restaurant");
    console.log("body", req.body);
    // ask to =>  const newSmth: MemberInput = { memberNick: "smr", memberPassword: "2234" , memberPhone:''};
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

restaurantController.processLogin = (req: Request, res: Response) => {
  try {
    console.log("Execution processLogin restaurant");
    res.send("Login Page restaurant Method post");
  } catch (err) {
    console.log("ERROR: processLogin restaurant", err);
  }
};

export default restaurantController;
