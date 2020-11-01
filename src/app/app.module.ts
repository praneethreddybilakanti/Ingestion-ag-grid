import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCategoryComponent } from './menu-dropdown/product-category/product-category.component';
import { ProductSubcategoryComponent } from './menu-dropdown/product-category/product-subcategory/product-subcategory.component';
import { ProductNavBarComponent } from './product-nav-bar/product-nav-bar.component';
import { VisibilityComponent } from './product-nav-bar/visibility/visibility.component';
import { TradingComponent } from './product-nav-bar/trading/trading.component';
import { ShippingComponent } from './product-nav-bar/shipping/shipping.component';
import { LogisticsComponent } from './product-nav-bar/logistics/logistics.component';
import { ImagesComponent } from './product-nav-bar/images/images.component';
import { HttpClientModule } from '@angular/common/http';
import {ProductAttributeServiceService} from 'src/app/service/product-attribute-service.service'
import { NotifierModule ,NotifierOptions} from 'angular-notifier';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { } from 'ag-grid-enterprise';
import { ActionbuttonsComponent } from './components/actionbuttons/actionbuttons.component';
import { ButtonRenderComponent } from './components/button-render/button-render.component';
import { AttributeDataService } from './shared/attributedata.service';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    ProductCategoryComponent,
    ProductSubcategoryComponent,
    ProductNavBarComponent,
    VisibilityComponent,
    TradingComponent,
    ShippingComponent,
    LogisticsComponent,
    ImagesComponent,
    ActionbuttonsComponent,
    ButtonRenderComponent,
    HeaderComponent,
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents(null),
	//NotifierModule.withConfig( customNotifierOptions ),
  FormsModule,
  ReactiveFormsModule,
	AgGridModule,
  HttpClientModule,
  NgxWebstorageModule.forRoot(),
  BrowserAnimationsModule,MatSelectModule
  
	


    
  ],
  providers: [ProductAttributeServiceService,AttributeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
