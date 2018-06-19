import * as ng from 'angular';

export const todoItemComponent: ng.IComponentOptions = {
  bindings: {
    todo: '<',
    onComplete: '&',
    onDelete: '&',
  },
  template: `
    <div class="todo-item-container">
      <input type="checkbox" ng-attr-id="item-completed-{{::$ctrl.todo.id}}" ng-model="$ctrl.todo.completed"
        ng-click="$ctrl.onComplete({ $event: {todo: $ctrl.todo} });"> </input>
      <label ng-attr-for="item-completed-{{::$ctrl.todo.id}}" class="item-label">
        <span  ng-class="{ completed: $ctrl.todo.completed }">{{ $ctrl.todo.label }}</span>
      </label>
      <button class="item-delete-btn" title="Delete todo" type="button"
        ng-click="$ctrl.onDelete({ $event: {todo: $ctrl.todo } });">&#10799;</button>
    </div>`,
};
