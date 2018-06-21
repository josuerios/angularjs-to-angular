import { Todo } from '../../todo';

export class TodoService {
  getTodos(): Promise<Todo[]> {
    return Promise.resolve([
      {
        label: 'Eat pizza',
        id: 1,
        completed: true,
      },
      {
        label: 'Do some coding',
        id: 2,
        completed: true,
      },
      {
        label: 'Sleep',
        id: 3,
        completed: false,
      },
      {
        label: 'Print tickets',
        id: 4,
        completed: true,
      },
    ]);
  }
}
