import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

interface User {
  id: string
  firstname: string
  lastname: string
  email: String
  token: String
  role: string
}


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    this.authService.getProfile(token).subscribe(res => {
      if(res) {
        this.user = res;
        console.log("this", this.user);    
      } else {
        console.log('error');
      }
    });
  }

}
