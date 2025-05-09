import { nanoid } from 'nanoid';

import { TodoModel } from '../models';
import type { ITodo } from '../types';

export const Todos: ITodo[] = [
  new TodoModel(nanoid(), 'learn svelte', true),
  new TodoModel(nanoid(), 'learn react'),
  new TodoModel(nanoid(), 'learn kubernetes'),
];
