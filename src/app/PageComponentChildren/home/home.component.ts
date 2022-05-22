import { Component, OnInit } from '@angular/core';
import {ProductItemModel} from "../Models/productItemModel";
import {ProductListItem} from "../Models/productListItem";
import {Router} from "@angular/router";
import {RoutingClass} from "../../RoutDirectory/RoutingClass";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public randomNumber =new BehaviorSubject<number>(0);

  productList: ProductItemModel[] = [
    {
      id: 1,
      name: 'Samsung Galaxy S22',
      price:600,
      productCount:4,
      discount:0
    },
    {
      id: 2,
      name: 'Iphone 7',
      price:900,
      productCount:5,
      discount:100
    },
    {
      id: 3,
      name: 'Iphone 18',
      price:7000,
      productCount:5,
      discount:100
    },
    {
      id: 4,
      name: 'Iphone 20',
      price:800,
      productCount:5,
      discount:100
    },
    {
      id: 5,
      name: '11 Max',
      price:400,
      productCount:5,
      discount:100
    },
    {
      id: 6,
      name: 'Iphone 10 Max',
      price:200,
      productCount:5,
      discount:100
    },
    {
      id: 7,
      name: '1100',
      price: 10,
      productCount: 5,
      discount: 1
    }
  ];
  constructor(private _router:Router) { }

  ngOnInit(): void {
    ProductListItem.productItem=this.productList;
  }

  routToPageLogin() {
    this._router.navigate([RoutingClass.login]).finally()
  }
}
