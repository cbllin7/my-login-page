import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  
  login(user: string, password: string): boolean {
    console.log("User: " + user + " Password: " + password)
    return (user === 'login' && password === 'please')
  }
}
