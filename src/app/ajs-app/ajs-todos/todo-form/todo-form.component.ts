import * as ng from 'angular';

class TodoFormController implements ng.IComponentController {
  label = '';

  submit() {
    if (!this.label) {
      return;
    }
    this.onAdd({
      $event: { label: this.label },
    });
    this.label = '';
  }

  private onAdd(param: { $event: { label: string } }) {}
}

export const todoFormComponent: ng.IComponentOptions = {
  controller: TodoFormController,
  bindings: {
    onAdd: '&',
  },
  template: `
    <form ng-submit="$ctrl.submit();" >
    <input ng-model="$ctrl.label" title="Press Enter to add" placeholder="Press Enter to add">
    </form>`,
};
