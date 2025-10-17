import { MemberStatus, MemberType } from "../enums/member.enum";
import mongoose, { ObjectId, Types } from "mongoose";

export interface Member {
  _id: Types.ObjectId;
  memberNick: string;
  memberPhone: string;
  memberPassword?: string;
  memberType: MemberType;
  memberStatus: MemberStatus;
  memberAddress?: string;
  memberDescription?: string;
  memberImage?: string;
  memberPoints: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface MemberInput {
  memberType?: MemberType;
  memberStatus?: MemberStatus;
  memberNick: string;
  memberPhone: string;
  memberPassword: string;
  memberAddress?: string;
  memberImage?: string;
  memberDescription?: string;
  memberPoints?: string;
}
