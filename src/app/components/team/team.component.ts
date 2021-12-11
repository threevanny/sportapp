import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Team {
  name: string,
  type: string,
  logo: string,
  members: ["Edgar Gomez","Alan Gil", "Juan Perez", "Camilo Reyes", "Duvan Zapata"],
  coach: string
}

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  API = "https://sportapptic.herokuapp.com/";

  teams: Team[] = []

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getTeams();
  }

  getTeams() {
    this.http.get<Team[]>(`${this.API}/api/team/all`)
     .subscribe(res => {
       console.log(res);
       this.teams = res;
     })
   }

}
