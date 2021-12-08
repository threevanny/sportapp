import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { TeamComponent } from './components/team/team.component';
import { ScenarioComponent } from './components/scenario/scenario.component';
import { TournamentComponent } from './components/tournament/tournament.component';
import { ScenarioCreateComponent } from './components/scenario-create/scenario-create.component';
import { TeamCreateComponent } from './components/team-create/team-create.component';
import { TournamentCreateComponent } from './components/tournament-create/tournament-create.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    HomeComponent,
    TeamComponent,
    ScenarioComponent,
    TournamentComponent,
    ScenarioCreateComponent,
    TeamCreateComponent,
    TournamentCreateComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
