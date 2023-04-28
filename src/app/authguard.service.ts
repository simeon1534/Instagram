import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor() { }

  getUser(): boolean{
    return !!localStorage.getItem("loggedUser")
  }
}
