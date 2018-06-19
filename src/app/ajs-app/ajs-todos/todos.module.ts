import * as ng from 'angular';
import { todosComponent } from './todos.component';
import { todoFormComponent } from './todo-form/todo-form.component';
import { todoListComponent } from './todo-list/todo-list.component';
import { TodoService } from './todo.service';
import { TodoItemComponent } from '../../ng-todos/todo-item/todo-item.component';
import { downgradeComponent } from '@angular/upgrade/static';

declare var angular: ng.IAngularStatic;

export const todosModule = angular
  .module('todos', [])
  .component('todos', todosComponent)
  .component('todoForm', todoFormComponent)
  .component('todoList', todoListComponent)
  .directive('todoItem', downgradeComponent({ component: TodoItemComponent }))
  .service('TodoService', TodoService);
