import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "../RoutDirectory/auth.guard";
import {RoutingClass} from "../RoutDirectory/RoutingClass";
import { ProductListAdminPanelComponent } from './admin-panel/product-list-admin-panel/product-list-admin-panel.component';
import { LoginComponent } from './login/login.component';
import { ProductListItemHomeComponent } from './home/product-list-item-home/product-list-item-home.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CustomPipe } from './Pipes/custom.pipe';

export const routs:Routes=[
  {path:'',component:HomeComponent},
  {path:RoutingClass.adminPanel,component:AdminPanelComponent,canActivate:[AuthGuard]},
  {path:RoutingClass.login,component:LoginComponent}


]

@NgModule({
  declarations: [
    AdminPanelComponent,
    HomeComponent,
    PageNotFoundComponent,
    ProductListAdminPanelComponent,
    LoginComponent,
    ProductListItemHomeComponent,

    CustomPipe
  ],
  exports:[
    AdminPanelComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routs),
    ReactiveFormsModule
  ]
})
export class PageModule { }
