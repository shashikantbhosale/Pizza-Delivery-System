import { BaseModel } from "./BaseModel";
import { Pizza } from "./Pizza";


export class Order extends BaseModel {
  UserId!: number;
  OrderItem!: Array<Pizza>;
  DeliveryAddress!: string;
  OrderDate!: Date;
  Status!: string;
  OrderTotal!:number;
  constructor() {
    super();
   ;
  }

}