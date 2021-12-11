import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-scenario-create',
  templateUrl: './scenario-create.component.html',
  styleUrls: ['./scenario-create.component.css']
})
export class ScenarioCreateComponent implements OnInit {

  API = "https://sportapptic.herokuapp.com/";

  scenario = {
    name: "",
    description: "",
    location: "",
    sports: "",
    capacity: ""
  };

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  save(){
    const newScenario = this.scenario
    this.http.post<any>(`${this.API}/api/scenario/create`, newScenario)
      .subscribe(data => {
        if(data){
          console.log(data)
          this.router.navigate(['/scenario']);
        }
      });
  }
}
