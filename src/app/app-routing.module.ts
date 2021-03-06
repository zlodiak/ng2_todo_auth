import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './services/auth-guard.service';

import { LoginComponent } from './components/login/login.component';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    children: [],
    canActivate: [AuthGuardService],
    component: ListComponent
  }, 
  {
    path: 'details',
    children: [],
    canActivate: [AuthGuardService],
    component: DetailsComponent
  },
  {
    path: 'login',
    children: [],
    component: LoginComponent
  },  
  {
    path: '**', 
    canActivate: [AuthGuardService],
    component: PageNotFoundComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }