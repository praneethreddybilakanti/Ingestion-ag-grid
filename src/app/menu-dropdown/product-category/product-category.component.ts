import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
interface Product {
  name: String;
}interface ProductSubCategory {
  name: String;
}
@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  selectedValue: string;
  selectedsubcategory: string;

  ngOnInit(): void {
  }
  constructor() {

  }
  

  products: Product[] = [
    {
      name: " electronics"
    },
    {
      name: "cloths"

    },{
      name: " mens"
    },
    {
      name: "womens"

    }

  ];
  productSubCategories:ProductSubCategory [] = [
    {
      name: " mobiles"
    },
    {
      name: "watches"

    }

  ];


}