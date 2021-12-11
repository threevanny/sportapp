import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Scenario {
  name: string,
  description: string,
  location: string,
  sports: string,
  capacity: number
}

@Component({
  selector: 'app-scenario',
  templateUrl: './scenario.component.html',
  styleUrls: ['./scenario.component.css']
})
export class ScenarioComponent implements OnInit {

  API = "https://sportapptic.herokuapp.com/";

  scenarios: Scenario[] = []

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.getScenarios();
  }

  getScenarios() {
   this.http.get<Scenario[]>(`${this.API}/api/scenario/all`)
    .subscribe(res => {
      console.log(res);
      this.scenarios = res;
    })
  }
}