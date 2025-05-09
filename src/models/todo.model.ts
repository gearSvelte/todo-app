import type { ITodo } from '../types';

export class TodoModel implements ITodo {
  constructor(
    readonly id: string,
    readonly text: string,
    readonly done = false,
  ) {}
}
