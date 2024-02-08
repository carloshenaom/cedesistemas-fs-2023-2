import { User } from "./user";

export class UserInResponse extends User{
  type!:String;
  status!:String;
  isRemoved!:boolean;
  _id!:String;
  createdAt!:String;
  updatedAt!:String

}

export class UserResponse{
  user!: UserInResponse;
}
