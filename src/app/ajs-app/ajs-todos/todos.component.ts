import * as ng from 'angular';

import { Todo } from '../../todo';
import { TodoService } from './todo.service';

class TodosController implements ng.IComponentController {
  static $inject = ['TodoService'];
  todos: Todo[] = [];

  constructor(public todoService: TodoService) {}

  $onInit() {
    this.todoService.getTodos().then(todos => {
      this.todos = todos;
    });
  }

  addTodo($event) {
    const { label } = $event;
    this.todos.push({ label, id: this.todos.length + 1, completed: false });
  }

  onComplete($event) {
    const { todo } = $event;
    this.todos = this.todos.map(
      item => (item.id === todo.id ? { ...item, completed: !item.completed } : item),
    );
  }

  onDelete($event) {
    const { todo } = $event;
    this.todos = this.todos.filter(item => todo.id !== item.id);
  }
}

export const todosComponent: ng.IComponentOptions = {
  controller: TodosController,
  template: `
  <div>
    <todo-form on-add="$ctrl.addTodo($event);"></todo-form>
    <todo-list todos="$ctrl.todos" on-complete="$ctrl.onComplete($event);"
      on-delete="$ctrl.onDelete($event);"></todo-list>
  </div>`,
};
