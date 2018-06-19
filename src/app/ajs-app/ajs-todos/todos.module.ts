import * as ng from 'angular';
import { todosComponent } from './todos.component';
import { todoFormComponent } from './todo-form/todo-form.component';
import { todoListComponent } from './todo-list/todo-list.component';
import { todoItemComponent } from './todo-list/todo-item/todo-item.component';
import { TodoService } from './todo.service';

declare var angular: ng.IAngularStatic;

export const todosModule = angular
  .module('todos', [])
  .component('todos', todosComponent)
  .component('todoForm', todoFormComponent)
  .component('todoList', todoListComponent)
  .component('todoItem', todoItemComponent)
  .service('TodoService', TodoService);
