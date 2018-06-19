import * as ng from 'angular';

export const todoListComponent: ng.IComponentOptions = {
  bindings: {
    todos: '<',
    onComplete: '&',
    onDelete: '&',
  },
  template: `
    <ul>
      <li ng-repeat="todo in $ctrl.todos track by $index">
        <todo-item todo="todo" on-complete="$ctrl.onComplete({$event:$event});"
          on-delete="$ctrl.onDelete({$event:$event});"/>
      </li>
    </ul>`,
};
