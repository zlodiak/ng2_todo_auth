import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 	MatButtonModule, 
					MatCardModule,
					MatInputModule,
          MatCheckboxModule,
          MatIconModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';       

import { AuthGuardService } from './services/auth-guard.service';
import { UsersService } from './services/users.service';
import { TodosService } from './services/todos.service';
import { GlobalVarsService } from './services/global-vars.service';

import { TodosPipe } from './pipes/todos.pipe';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    TodosPipe,
    LoginComponent,
    ListComponent,
    DetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    HttpModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
  	MatInputModule,
  	FormsModule,
  	MatCardModule,
  	BrowserAnimationsModule,
    BrowserModule
  ],
  providers: [
    AuthGuardService,
    UsersService,
    GlobalVarsService,
    TodosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
