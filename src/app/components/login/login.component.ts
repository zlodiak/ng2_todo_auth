import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'

import { UsersService } from '../../services/users.service';
import { GlobalVarsService } from '../../services/global-vars.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	private login: string = '';
  private password: string = '';
	private allUsersData: Object = {};

  constructor(private usersService: UsersService, 
              private globalVarsService: GlobalVarsService,
              private router: Router) { }

  ngOnInit() {
  	this.getAllUsersData();
  }

  private checkAuth(): void {  
    let isValidLogin: boolean = false;
    let isValidPassword: boolean = false;

    isValidLogin = Object.keys(this.allUsersData).indexOf(this.login) != -1;     

    if(isValidLogin) {
      let pass = this.allUsersData[this.login]['password'];

      if(pass == this.password) {
        isValidPassword = true;
      }
    } 

    //console.log(isValidLogin, isValidPassword); 

    if(isValidLogin && isValidPassword) {
      //alert('auth successful');
      this.globalVarsService.setVar('authorizedLogin', this.login);
      this.router.navigate(['/list']);
    } else {
      alert('auth failed');
    }

  };

  private getAllUsersData(): void {
  	this.usersService.getUsers().subscribe(
      data => {   
        //console.log(data);  
        this.allUsersData = JSON.parse(data._body);                 
      }, 
      err => {
        console.log('err')         
      })

  };  

}
