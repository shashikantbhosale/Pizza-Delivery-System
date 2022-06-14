import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Order } from '../Models/Order';
import { Pizza } from '../Models/Pizza';
import { PizzaItem } from '../Models/PizzaItem';

@Component({
  selector: 'app-pizza-home',
  templateUrl: './pizza-home.component.html',
  styleUrls: ['./pizza-home.component.css']
})
export class PizzaHomeComponent implements OnInit {
  pizzaList : Array<Pizza>;
  pizzaListJson:any;
  constructor(private http:HttpClient,private _http:HttpClient) {
    this.pizzaList=new Array<Pizza>();
   }

  ngOnInit(): void {
    this._getPizzaList1();
  }
  private _getPizzaList() {
    var url = environment.baseURL+ "api/PizzaHome/All" ;
    this.http.get(url).subscribe(
      (data:any):any => {
        
        // console.log(data);
        this.pizzaList = data;
      
      },
      err => {
      
        // console.log("error");
        
      }
    );
  }

  calculateTotalPrice(pizza:Pizza){
    pizza.Totalprice=0;
    for(var i=0;i<pizza.Cheese.length;i++){
      if(pizza.Cheese[i].Selected){
        pizza.Totalprice=pizza.Totalprice+pizza.Cheese[i].Price;
      }
    }
    for(var i=0;i<pizza.Size.length;i++){
      if(pizza.Size[i].Selected){
        pizza.Totalprice=pizza.Totalprice+pizza.Size[i].Price;
      }
    }
    for(var i=0;i<pizza.Sauce.length;i++){
      if(pizza.Sauce[i].Selected){
        pizza.Totalprice=pizza.Totalprice+pizza.Sauce[i].Price;
      }
    }
    for(var i=0;i<pizza.Toppings.length;i++){
      if(pizza.Toppings[i].Selected){
        pizza.Totalprice=pizza.Totalprice+pizza.Toppings[i].Price;
      }
    }
  }

  
  updatecheeseIschecked(pizza:Pizza,item:PizzaItem):any {
    pizza.Cheese.forEach(t => {
       t.Selected = t.Name == item.Name;
     });
     this.calculateTotalPrice(pizza)
   }
  updateSizeIschecked(pizza:Pizza,item:PizzaItem):any {
    pizza.Size.forEach(t => {
       t.Selected = t.Name == item.Name;
     });
     this.calculateTotalPrice(pizza)
   }

   placeOrder(pizza:Pizza){
    let order = new Order();
    order.UserId=1;
    order.OrderDate=new Date();
    order.DeliveryAddress="Test Address";
    order.OrderItem=new Array<Pizza>();
    order.OrderItem.push(pizza);
    order.Status="In Process";
     this._http.post<any>(environment.baseURL+ `api/order/save`, JSON.stringify(order))
    .toPromise()
    .catch(err => {
      return err.error;
    });
   }
  _getPizzaList1(){
    
 this.pizzaListJson =[
  {
    "Id": "1",
    "Name": "Creamy Tomato Pasta Pizza - Veg",
    "Image": "https://images.dominos.co.in/CreamyTomatoPPVG.jpg",
    "Description": "Loaded with a delicious creamy tomato pasta topping , green capsicum",
    "Totalprice": 230,
    "Size": [
      {
        "Name": "Medium",
        "Price": 350,
        "Selected": false
      },
      {
        "Name": "Large",
        "Price": 470,
        "Selected": false
      },
      {
        "Name": "Regular",
        "Price": 230,
        "Selected": true
      }
    ],
    "Cheese": [
      {
        "Name": "Regular",
        "Price": 50,
        "Selected": false
      },
      {
        "Name": "Extra",
        "Price": 100,
        "Selected": false
      }
    ],
    "Toppings": [
      {
        "Name": "Pepperoni",
        "Price": 20,
        "Selected": false
      },
      {
        "Name": "Sausage",
        "Price": 60,
        "Selected": false
      },
      {
        "Name": "Mushrooms",
        "Price": 200,
        "Selected": false
      },
      {
        "Name": "Onions",
        "Price": 50,
        "Selected": false
      }
    ],
    "Sauce": [
      {
        "Name": "Marinara",
        "Price": 20,
        "Selected": false
      },
      {
        "Name": "Cheese",
        "Price": 50,
        "Selected": false
      },
      {
        "Name": "ranch",
        "Price": 70,
        "Selected": false
      }
    ]
  },
  {
    "Id": "2",
    "Name": "Corn n Cheese Paratha Pizza",
    "Image": "https://images.dominos.co.in/Corn.jpg",
    "Description": "A delicious fusion of corn stuffed paratha and cheesy pizza.",
    "Totalprice": 255,
    "Size": [
      {
        "Name": "Medium",
        "Price": 320,
        "Selected": false
      },
      {
        "Name": "Large",
        "Price": 405,
        "Selected": false
      },
      {
        "Name": "Regular",
        "Price": 255,
        "Selected": true
      }
    ],
    "Cheese": [
      {
        "Name": "Regular",
        "Price": 50,
        "Selected": false
      },
      {
        "Name": "Extra",
        "Price": 100,
        "Selected": false
      }
    ],
    "Toppings": [
      {
        "Name": "Pepperoni",
        "Price": 20,
        "Selected": false
      },
      {
        "Name": "Sausage",
        "Price": 60,
        "Selected": false
      },
      {
        "Name": "Mushrooms",
        "Price": 200,
        "Selected": false
      },
      {
        "Name": "Onions",
        "Price": 50,
        "Selected": false
      }
    ],
    "Sauce": [
      {
        "Name": "Marinara",
        "Price": 20,
        "Selected": false
      },
      {
        "Name": "Cheese",
        "Price": 50,
        "Selected": false
      },
      {
        "Name": "ranch",
        "Price": 70,
        "Selected": false
      }
    ]
  },{
    "Id": "3",
    "Name": "Paneer Paratha Pizza",
    "Image": "https://images.dominos.co.in/Paneer.jpg",
    "Description": "An epic fusion of paratha and pizza with melting cheese",
    "Totalprice": 233,
    "Size": [
      {
        "Name": "Medium",
        "Price": 345,
        "Selected": false
      },
      {
        "Name": "Large",
        "Price": 457,
        "Selected": false
      },
      {
        "Name": "Regular",
        "Price": 233,
        "Selected": true
      }
    ],
    "Cheese": [
      {
        "Name": "Regular",
        "Price": 50,
        "Selected": false
      },
      {
        "Name": "Extra",
        "Price": 100,
        "Selected": false
      }
    ],
    "Toppings": [
      {
        "Name": "Pepperoni",
        "Price": 20,
        "Selected": false
      },
      {
        "Name": "Sausage",
        "Price": 60,
        "Selected": false
      },
      {
        "Name": "Mushrooms",
        "Price": 200,
        "Selected": false
      },
      {
        "Name": "Onions",
        "Price": 50,
        "Selected": false
      }
    ],
    "Sauce": [
      {
        "Name": "Marinara",
        "Price": 20,
        "Selected": false
      },
      {
        "Name": "Cheese",
        "Price": 50,
        "Selected": false
      },
      {
        "Name": "ranch",
        "Price": 70,
        "Selected": false
      }
    ]
  },{
    "Id": "4",
    "Name": "The Unthinkable Pizza",
    "Image": "https://images.dominos.co.in/PIZ0167.jpg",
    "Description": "Loaded with Plant Based Protein topping along with Black Olives & Red Paprika",
    "Totalprice": 266,
    "Size": [
      {
        "Name": "Medium",
        "Price": 300,
        "Selected": false
      },
      {
        "Name": "Large",
        "Price": 400,
        "Selected": false
      },
      {
        "Name": "Regular",
        "Price": 266,
        "Selected": true
      }
    ],
    "Cheese": [
      {
        "Name": "Regular",
        "Price": 50,
        "Selected": false
      },
      {
        "Name": "Extra",
        "Price": 100,
        "Selected": false
      }
    ],
    "Toppings": [
      {
        "Name": "Pepperoni",
        "Price": 20,
        "Selected": false
      },
      {
        "Name": "Sausage",
        "Price": 60,
        "Selected": false
      },
      {
        "Name": "Mushrooms",
        "Price": 200,
        "Selected": false
      },
      {
        "Name": "Onions",
        "Price": 50,
        "Selected": false
      }
    ],
    "Sauce": [
      {
        "Name": "Marinara",
        "Price": 20,
        "Selected": false
      },
      {
        "Name": "Cheese",
        "Price": 50,
        "Selected": false
      },
      {
        "Name": "ranch",
        "Price": 70,
        "Selected": false
      }
    ]
  },{
    "Id": "5",
    "Name": "The Cheese Dominator",
    "Image": "https://images.dominos.co.in/PIZ0170.jpg",
    "Description": "Loaded with 1 Pound of Mozzarella and gooey Liquid Cheese",
    "Totalprice": 211,
    "Size": [
      {
        "Name": "Medium",
        "Price": 326,
        "Selected": false
      },
      {
        "Name": "Large",
        "Price": 477,
        "Selected": false
      },
      {
        "Name": "Regular",
        "Price": 211,
        "Selected": true
      }
    ],
    "Cheese": [
      {
        "Name": "Regular",
        "Price": 50,
        "Selected": false
      },
      {
        "Name": "Extra",
        "Price": 100,
        "Selected": false
      }
    ],
    "Toppings": [
      {
        "Name": "Pepperoni",
        "Price": 20,
        "Selected": false
      },
      {
        "Name": "Sausage",
        "Price": 60,
        "Selected": false
      },
      {
        "Name": "Mushrooms",
        "Price": 200,
        "Selected": false
      },
      {
        "Name": "Onions",
        "Price": 50,
        "Selected": false
      }
    ],
    "Sauce": [
      {
        "Name": "Marinara",
        "Price": 20,
        "Selected": false
      },
      {
        "Name": "Cheese",
        "Price": 50,
        "Selected": false
      },
      {
        "Name": "ranch",
        "Price": 70,
        "Selected": false
      }
    ]
  },{
    "Id": "6",
    "Name": "Cheese n Tomato",
    "Image": "https://images.dominos.co.in/cheese_and_tomato.png",
    "Description": "A delectable combination of cheese and juicy tomato",
    "Totalprice": 288,
    "Size": [
      {
        "Name": "Medium",
        "Price": 348,
        "Selected": false
      },
      {
        "Name": "Large",
        "Price": 455,
        "Selected": false
      },
      {
        "Name": "Regular",
        "Price": 288,
        "Selected": true
      }
    ],
    "Cheese": [
      {
        "Name": "Regular",
        "Price": 50,
        "Selected": false
      },
      {
        "Name": "Extra",
        "Price": 100,
        "Selected": false
      }
    ],
    "Toppings": [
      {
        "Name": "Pepperoni",
        "Price": 20,
        "Selected": false
      },
      {
        "Name": "Sausage",
        "Price": 60,
        "Selected": false
      },
      {
        "Name": "Mushrooms",
        "Price": 200,
        "Selected": false
      },
      {
        "Name": "Onions",
        "Price": 50,
        "Selected": false
      }
    ],
    "Sauce": [
      {
        "Name": "Marinara",
        "Price": 20,
        "Selected": false
      },
      {
        "Name": "Cheese",
        "Price": 50,
        "Selected": false
      },
      {
        "Name": "ranch",
        "Price": 70,
        "Selected": false
      }
    ]
  }
];
 // let jsonObject: any = JSON.parse(this.pizzaListJson);
  this.pizzaList = <Array<Pizza>>this.pizzaListJson;
  }

  
}
