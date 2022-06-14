import { BaseModel } from "./BaseModel";
import { PizzaItem } from "./PizzaItem";


export class Pizza extends BaseModel {
  
  Image:string;
  Totalprice:number;
  Description:string;
  Sauce:Array<PizzaItem>;
  Toppings:Array<PizzaItem>;
  Cheese:Array<PizzaItem>;
  Size:Array<PizzaItem>;
  constructor() {
    super();
   ;
   this.Image="";
   this.Description="";
   this.Totalprice=0;
   this.Sauce=new Array<PizzaItem>();
   this.Toppings=new Array<PizzaItem>();
   this.Cheese=new Array<PizzaItem>();
   this.Size=new Array<PizzaItem>();
  }

}