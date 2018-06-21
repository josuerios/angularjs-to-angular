import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosWrapperDirective } from './todos-wrapper.directive';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [TodosWrapperDirective, TodoItemComponent],
  exports: [TodosWrapperDirective, TodoItemComponent],
  entryComponents:[TodoItemComponent]
})
export class NgTodosModule {}
