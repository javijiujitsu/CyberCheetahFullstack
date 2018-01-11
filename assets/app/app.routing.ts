import { Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { CareerComponent } from "./careers/career.component";
import { CareerListComponent } from "./careers/career-list.component";

export const APP_ROUTES: Routes = [

  { path: '**', redirectTo: '' },
  { path: 'home', component: HomeComponent },
  { path: 'auth', component: AuthenticationComponent },
  { path: 'career', component: CareerComponent },
  { path: 'career', component: CareerListComponent },


];
