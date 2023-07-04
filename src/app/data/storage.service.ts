import { Injectable } from '@angular/core';
import { of } from 'rxjs';

const USER_KEY = 'auth-user';
const ROLE_KEY = 'auth-role';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  isLogin = false;
  roleAs: any;

  constructor() { }

   clean(): void {
     window.sessionStorage.clear();
   }

   public saveUser(user: any): void {
     window.sessionStorage.removeItem(USER_KEY);
     window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
   }

   public getUser(): any {
     const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
     return JSON.parse(user);
   }

     return {};
   }

    public getRole(): any {
     const role = window.sessionStorage.getItem(ROLE_KEY);
     if (role) {
       return JSON.parse(role);
     }

     return {};
   }



  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }


}
