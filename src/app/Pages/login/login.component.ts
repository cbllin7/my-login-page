import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username;
  password;
  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit(): void {
  }

  login(username: string, password: string) {
    console.log(username, password)
    // if (this.loginService.login(username, password)) {
    //     this.router.navigateByUrl('/success')
    // }
  }

}
