import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { UserDeleteComponent } from './components/user/user-delete/user-delete.component';
import { UserUpdateComponent } from './components/user/user-update/user-update.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent}from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import {UserCrudComponent} from './views/user-crud/user-crud.component';

const routes: Routes = [
{
path:"",
component: HomeComponent
},
{
path:"products",
component: ProductCrudComponent
},
{
path:"users",
component: UserCrudComponent  
},
{
path:"products/create",
component: ProductCreateComponent  
},
{
path:"products/update/:id",
component: ProductUpdateComponent
},
{
path:"products/delete/:id",
component: ProductDeleteComponent
},
{
path:"user/create",
component: UserCreateComponent  
},
{
path:"user/update/:id",
component: UserUpdateComponent  
},
{
path:"user/delete/:id",
component: UserDeleteComponent  
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
