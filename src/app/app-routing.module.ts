import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { ScenarioComponent } from './components/scenario/scenario.component';
import { TeamComponent } from './components/team/team.component';
import { TournamentComponent } from './components/tournament/tournament.component';
import { ScenarioCreateComponent } from './components/scenario-create/scenario-create.component';
import { TeamCreateComponent } from './components/team-create/team-create.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'scenario', component: ScenarioComponent },
  { path: 'team', component: TeamComponent },
  { path: 'tournament', component: TournamentComponent	},
  { path: 'scenario-create', component: ScenarioCreateComponent },
  { path: 'team-create', component: TeamCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
