import { Pipe, PipeTransform } from '@angular/core';

import { Todo } from '../types/todo';
import { TodosService } from '../services/todos.service';
import { GlobalVarsService } from '../services/global-vars.service';


@Pipe({
  name: 'todos'
})
export class TodosPipe implements PipeTransform {

	constructor(private todosService: TodosService,
              private globalVarsService: GlobalVarsService) {};

  transform(value: any, btnName: string): any {
    let authorizedLogin = this.globalVarsService.getVar('authorizedLogin');
  	let todosFitered: Todo[] = []; 	
  	let todos = this.todosService.getTodos(authorizedLogin);

  	todos.forEach((todo) => {
  		if(todo.isChecked == false) {
  			todosFitered.push(todo);
  		}
  	});	

  	return todosFitered;
  }

}
