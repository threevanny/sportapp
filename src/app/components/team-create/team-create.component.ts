import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css']
})
export class TeamCreateComponent implements OnInit {

  API = "http://localhost:3000";

  team = {
    name: "",
    type: "",
    logo: "",
    members: ["Edgar Gomez","Alan Gil", "Juan Perez", "Camilo Reyes", "Duvan Zapata"],
    coach: "Rick Sanchez",
  };


  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  saveTeam() {
    const newTeam = this.team;
    console.log(newTeam);
    this.http.post<any>(`${this.API}/api/team/create`, newTeam)
      .subscribe(data => {
        if(data){
          console.log(data)
          this.router.navigate(['/team']);
        }
      });
  }
}
