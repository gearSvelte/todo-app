import { writable } from 'svelte/store';
import { nanoid } from 'nanoid';

import { TodoModel } from '../models';
import type { ITodo } from '../types';

export const Todos = writable<ITodo[]>([
  new TodoModel(nanoid(), 'learn svelte', true),
  new TodoModel(nanoid(), 'learn react'),
  new TodoModel(nanoid(), 'learn kubernetes'),
]);
