import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleUserService {
  static isLoggedIn=false;
  static isAdminLogin=false;
  constructor() { }
  public login(){
    RoleUserService.isLoggedIn=true;

  }
  public logout(){
    RoleUserService.isLoggedIn=false;
  }
  public adminLogin(){
    RoleUserService.isAdminLogin=true;

  }
  public adminLogout(){
    RoleUserService.isAdminLogin=false;
  }
}
