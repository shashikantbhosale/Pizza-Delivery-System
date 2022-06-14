import { BaseModel } from "./BaseModel";


export class PizzaItem extends BaseModel {
  Price: number;
  Selected: boolean;
  constructor() {
    super();
   ;
    this.Name = "";
    this.Price=0;
    this.Selected=false;
  }

}