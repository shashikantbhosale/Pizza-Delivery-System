import { BaseModel } from "./BaseModel";


export class User extends BaseModel {
  FirstName!: string;
  LastName!: string;
  Email!: string;
  Password!: string;
  constructor() {
    super();
   ;
    this.Password = "";
  }

}