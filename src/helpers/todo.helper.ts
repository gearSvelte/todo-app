import { nanoid } from 'nanoid';

import { Todos } from '../data';
import type { ITodo } from '../types';
import { TodoModel } from '../models';

let todos: ITodo[] = Todos;

/** Добавляем новую задачу */
function addTodo(task: string, completed?: boolean): void {
  const newTodo = new TodoModel(nanoid(), task, completed);
  todos = [...todos, newTodo];
}

/** Удаляем задачу по id */
function deleteTodo(id: string): void {
  todos = todos.filter((todo: ITodo) => todo.id !== id);
}

/** Оставляем только незавершенные задачи */
function archiveCompletedTodos(): void {
  todos = todos.filter((todo: ITodo) => !todo.done);
}

function toggleTodoAsCompleted(todoCompleted: ITodo): void {
  const { id } = todoCompleted;
  todos = todos.map((todo: ITodo) =>
    todo.id === id ? { ...todo, done: !todo.done } : todo,
  );
}

function uncompletedTodosCount(): number {
  return todos.filter((todo: ITodo) => !todo.done).length;
}

function getAllTodos(): ITodo[] {
  return todos;
}

export {
  addTodo,
  deleteTodo,
  archiveCompletedTodos,
  toggleTodoAsCompleted,
  uncompletedTodosCount,
  getAllTodos,
};
