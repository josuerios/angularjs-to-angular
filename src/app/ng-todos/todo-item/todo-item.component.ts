import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() onComplete = new EventEmitter();
  @Output() onDelete = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
