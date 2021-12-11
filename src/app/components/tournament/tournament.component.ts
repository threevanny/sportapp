import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Tournament {
  name: string, 
  type: string,
  description: string,
  teams: ["Leones","Pumas", "Aguilas", "Tiburones", "Unicornios"],
  referee: "Daniel Reyes",
  scenario: "Estadio municipal #2",
  status: "activo"
}

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {

  API = "https://sportapptic.herokuapp.com/";

  ts: Tournament[] = []

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.getTournaments();
  }

  getTournaments() {
    this.http.get<Tournament[]>(`${this.API}/api/tournament/all`)
    .subscribe(res => {
      console.log(res);
      this.ts = res;
    })
  }
}
