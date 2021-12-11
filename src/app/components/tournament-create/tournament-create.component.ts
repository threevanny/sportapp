import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tournament-create',
  templateUrl: './tournament-create.component.html',
  styleUrls: ['./tournament-create.component.css']
})
export class TournamentCreateComponent implements OnInit {

  API = "https://sportapptic.herokuapp.com/";

  tournament = {
    name: "", 
    type: "",
    description: "",
    teams: ["Leones","Pumas", "Aguilas", "Tiburones", "Unicornios"],
    referee: "Daniel Reyes",
    scenario: "Estadio municipal #2",
    status: "activo"
  };

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  saveTournament() {
    const newTournament = this.tournament;
    console.log(newTournament);
    this.http.post<any>(`${this.API}/api/tournament/create`, newTournament)
    .subscribe(data => {
      if(data){
        console.log(data)
        this.router.navigate(['/tournament']);
      }
    });
  }
}
