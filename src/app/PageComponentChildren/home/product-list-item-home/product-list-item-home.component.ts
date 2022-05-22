import {Component, Input, OnInit} from '@angular/core';
import {ProductItemModel} from "../../Models/productItemModel";

@Component({
  selector: 'app-product-list-item-home',
  templateUrl: './product-list-item-home.component.html',
  styleUrls: ['./product-list-item-home.component.css']
})
export class ProductListItemHomeComponent implements OnInit {
  @Input() cartProductItem!:ProductItemModel;

  constructor() { }

  ngOnInit(): void {
  }

}
