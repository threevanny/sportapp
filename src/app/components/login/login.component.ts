import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: "",
    password: ""
  }

  constructor(
    private autService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.autService.isAuth()){
      this.router.navigate(['/profile'])
    }
  }

  login() {
    console.log("login...", this.user)
    const {email, password} = this.user
    this.autService.loginRequest(email, password)
    .subscribe(res => {
      if(res.isAuth) {
        localStorage.setItem('token', res.token);
        localStorage.setItem('id', res.id);
        localStorage.setItem('role', res.role);
        this.router.navigate(['/profile']);
      } else {
        console.log(res);
      }
    })
  }
}
