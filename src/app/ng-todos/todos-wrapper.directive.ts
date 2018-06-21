import { Directive, ElementRef, Inject, Injector, Input } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'todos',
})
export class TodosWrapperDirective extends UpgradeComponent {
  @Input() title;

  constructor(@Inject(ElementRef) elementRef: ElementRef, @Inject(Injector) injector: Injector) {
    super('todos', elementRef, injector);
  }
}
