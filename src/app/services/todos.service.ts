import { Injectable } from '@angular/core';

import { Todo } from '../types/todo';


@Injectable()
export class TodosService {

  constructor() { }

  rewriteTodos(todos) {
  	localStorage.todos = JSON.stringify(todos);
  }

  getTodos(authorizedLogin = undefined) {
    let todos = localStorage.todos ? JSON.parse(localStorage.todos) : [];

    //console.log(authorizedLogin, '__todos', todos, typeof todos);

    if(!authorizedLogin) { return todos; }

    let newTodos = [];

    todos.forEach((todo) => {
      if(todo.userLogin == authorizedLogin) {
        newTodos.push(todo);
      }
    });

  	return newTodos;
  };

  removeTodo(id) {
    let todos = this.getTodos();
    let newTodos: Todo[] = [];

    todos.forEach((todo) => {
      if(todo.id != id) {
        newTodos.push(todo);
      }
    });

    localStorage.todos = JSON.stringify(newTodos);
  };

  addTodo(todo) {
  	let todos = this.getTodos();
  	todos.push(todo);
  	localStorage.todos = JSON.stringify(todos);
  };

}
