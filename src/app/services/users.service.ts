import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Config } from '../config';



@Injectable()
export class UsersService {

  constructor(private http: Http) { };

  getUsers(): Observable<any> {
  	return this.http.get(Config.host + 'assets/json/users.json');
  };

}
