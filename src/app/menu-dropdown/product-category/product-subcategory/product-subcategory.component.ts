import { Component, OnInit } from '@angular/core';

interface ProductSubCategory {
  name: String;
}
@Component({
  selector: 'app-product-subcategory',
  templateUrl: './product-subcategory.component.html',
  styleUrls: ['./product-subcategory.component.css']
})


export class ProductSubcategoryComponent implements OnInit {
  selectedValue: string;

  ngOnInit(): void {
  }
  constructor() {

  }


  productsSubCategories: ProductSubCategory[] = [
    {
      name: " electronics"
    },
    {
      name: "cloths"

    }, {
      name: " electronics"
    },
    {
      name: "cloths"

    }

  ];


}