import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from "./backend/admin/admin.component";
import {DashboardComponent} from "./backend/dashboard/dashboard.component";
import {ProductManagerComponent} from "./backend/product-manager/product-manager.component";
import {CategoryManagerComponent} from "./backend/category-manager/category-manager.component";
import {AddProductComponent} from "./backend/add-product/add-product.component";
import {AddCategoryComponent} from "./backend/add-category/add-category.component";
import {EditProductComponent} from "./backend/edit-product/edit-product.component";
import {EditCategoryComponent} from "./backend/edit-category/edit-category.component";
import {Err404Component} from "./frontend/err404/err404.component";
import {HomeComponent} from "./frontend/home/home.component";
import {LayoutComponent} from "./frontend/layout/layout.component";
import {ProductDetailComponent} from "./frontend/product-detail/product-detail.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'admin', component: AdminComponent,
    children: [
      {path: '', redirectTo: 'dashboard',pathMatch:'full'},
      {path:'dashboard',component:DashboardComponent},
      {path:'products',component:ProductManagerComponent},
      {path:'categories',component:CategoryManagerComponent},
      {path:'add-product',component:AddProductComponent},
      {path:'add-category',component:AddCategoryComponent},
      {path:'edit-product/:id',component:EditProductComponent},
      {path:'edit-category/:id',component:EditCategoryComponent}
    ]
  },
  {path:'',component:LayoutComponent,
    children: [
      {path:'home',component:HomeComponent},
      {path:'product/:id',component:ProductDetailComponent},
      {path:'**',component:Err404Component},
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
