import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    role: ""
  };

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  signup(){
    const {firstname, lastname, email, password, role} = this.user;
    this.authService.signupRequest(firstname, lastname, email, password, role)
    .subscribe(res => {
      console.log(res);
      if(res.success) {
        this.router.navigate(['/login']);
      } else {
        console.log(res);
      }
    })
  }
}
