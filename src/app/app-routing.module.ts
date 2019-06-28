import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: RegisterComponent },
  { path: 'home', component: HomeComponent },

  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  { path: '**', redirectTo: '/signup', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
