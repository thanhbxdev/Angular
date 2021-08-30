import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HeaderComponent} from './frontend/header/header.component';
import {FooterComponent} from './frontend/footer/footer.component';
import {FormsModule} from "@angular/forms";
import {ProductService} from "./product.service";
import {AdminComponent} from './backend/admin/admin.component';
import {DashboardComponent} from './backend/dashboard/dashboard.component';
import {ProductManagerComponent} from './backend/product-manager/product-manager.component';
import {CategoryManagerComponent} from './backend/category-manager/category-manager.component';
import {HttpClientModule} from "@angular/common/http";
import {AddProductComponent} from './backend/add-product/add-product.component';
import {EditProductComponent} from './backend/edit-product/edit-product.component';
import {EditCategoryComponent} from './backend/edit-category/edit-category.component';
import {AddCategoryComponent} from './backend/add-category/add-category.component';
import {Err404Component} from './frontend/err404/err404.component';
import {HomeComponent} from './frontend/home/home.component';
import { LayoutComponent } from './frontend/layout/layout.component';
import { ProductDetailComponent } from './frontend/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    DashboardComponent,
    ProductManagerComponent,
    CategoryManagerComponent,
    AddProductComponent,
    EditProductComponent,
    EditCategoryComponent,
    AddCategoryComponent,
    Err404Component,
    HomeComponent,
    LayoutComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
