import { LoginService } from '../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  frm: FormGroup;


  constructor(private loginService: LoginService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.frm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    }
    );
  }

  login() {
    var username = this.frm.controls['username'].value;
    var password = this.frm.controls['password'].value;
    if (this.loginService.login(username, password)) {
        this.router.navigateByUrl('/success')
    }
  }

}
