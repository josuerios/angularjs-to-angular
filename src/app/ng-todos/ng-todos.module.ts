import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosWrapperDirective } from './todos-wrapper.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TodosWrapperDirective],
  exports: [TodosWrapperDirective]
})
export class NgTodosModule { }
