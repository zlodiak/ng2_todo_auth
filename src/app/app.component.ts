import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'

import { GlobalVarsService } from './services/global-vars.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private globalVarsService: GlobalVarsService,
  						private router: Router) {};

  ngOnInit() {

  };

  private isAuthorized(): boolean {
  	let login = this.globalVarsService.getVar('authorizedLogin');
  	return login != undefined ? true : false;
  };

  private logout(): void {
  	let login = this.globalVarsService.getVar('authorizedLogin');
  	this.globalVarsService.setVar(login, undefined);
  	this.isAuthorized();
  	this.router.navigate(['/login']);
  };

}
