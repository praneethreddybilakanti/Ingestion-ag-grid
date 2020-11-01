import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductAttributes } from '../model/product-attributes';
import { Attributes } from '../model/attributes';
@Injectable({
  providedIn: 'root'
})
export class ProductAttributeServiceService {
  apiUrl: String = "http://localhost:9090/ingestion";

  constructor(private http: HttpClient) {
  }
  addProductAttributeIngestion(productAttributes:ProductAttributes) {
/*const attributesednd=new ProductAttributes();
    attributesednd.productSubCategoryName=productAttributes.productSubCategoryName;
    attributesednd.productCategoryName=productAttributes.productCategoryName;
    attributesednd.createdBy=productAttributes.createdBy;
  */
   const  attributesPair:Map<String,Attributes[]>= new Map<String,Attributes[]>();
    attributesPair.set("visibility",productAttributes.attributesPair.get("visibility"));
    attributesPair.set("trading",productAttributes.attributesPair.get("trading"));
    attributesPair.set("shipping",productAttributes.attributesPair.get("shipping"));
    attributesPair.set("images",productAttributes.attributesPair.get("images"));
    attributesPair.set("logestics",productAttributes.attributesPair.get("logestics"));
    const convMap={};

    attributesPair.forEach((val: Attributes[], key: string) => {
      convMap[key] = val;
    
  });
      let myresponseObject={
        "productSubCategoryName":productAttributes.productSubCategoryName,
        "productCategoryName":productAttributes.productCategoryName,
        "attributesPair":convMap,
        "createdBy":productAttributes.createdBy
      }
   
    //attributesednd.attributesPair=convMap;

    return this.http.post(this.apiUrl+"/productattributes/", myresponseObject).subscribe(response=>
      {
        console.log("response"+JSON.stringify(response)), err=>console.log("error"+err)
      }
     );
  }
}