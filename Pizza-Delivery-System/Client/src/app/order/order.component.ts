import { Component, OnInit } from '@angular/core';
import { Order } from '../Models/Order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
orders:Array<Order>;
ordersJson:any;
  constructor() {
    this.orders=new Array<Order>();
   }

  ngOnInit(): void {
    this._getOrders();
  }

  _getOrders(){
    this.ordersJson=[
      {
        "UserId": 1,
        "OrderItem": [
          {
            "Id": "1",
            "Name": "Creamy Tomato Pasta Pizza - Veg",
            "Image": "https://images.dominos.co.in/CreamyTomatoPPVG.jpg",
            "Description": "Loaded with a delicious creamy tomato pasta topping , green capsicum",
            "Totalprice": 300,
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
          }
        ],
        "DeliveryAddress": "test address",
        "OrderDate": "02/02/2022",
        "Status": "In Progress"
      },
      {
        "UserId": 1,
        "OrderItem": [
          {
            "Id": "1",
            "Name": "Creamy Tomato Pasta Pizza - Veg",
            "Image": "https://images.dominos.co.in/CreamyTomatoPPVG.jpg",
            "Description": "Loaded with a delicious creamy tomato pasta topping , green capsicum",
            "Totalprice": 300,
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
          }
        ],
        "DeliveryAddress": "test address",
        "OrderDate":  "02/02/2022",
        "Status": "In Progress"
      }
    ];
    this.orders = <Array<Order>>this.ordersJson;
  }
 
}
