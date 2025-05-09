import { nanoid } from 'nanoid';

import { Todos } from '../data';
import type { ITodo } from '../types';
import { TodoModel } from '../models';

/** Добавляем новую задачу */
function addTodo(task: string, completed?: boolean): void {
  Todos.update((todos) => [...todos, new TodoModel(nanoid(), task, completed)]);
}

/** Удаляем задачу по id */
function deleteTodo(id: string): void {
  Todos.update((todos) => todos.filter((todo) => todo.id !== id));
}

/** Оставляем только незавершенные задачи */
function archiveCompletedTodos(): void {
  Todos.update((todos) => todos.filter((todo) => !todo.done));
}

/** Помечаем задачу как завершенную или не завершенную */
function toggleTodoAsCompleted(todoCompleted: ITodo): void {
  const { id } = todoCompleted;
  Todos.update((todos) =>
    todos.map((todo) => {
      if (todo.id === id) {
        return new TodoModel(todo.id, todo.text, !todo.done);
      }
      return todo;
    }),
  );
}

/** Возвращаем число незавершенных задач */
function uncompletedTodosCount(todos: ITodo[]): number {
  return todos.filter((todo) => !todo.done).length;
}

export {
  addTodo,
  deleteTodo,
  archiveCompletedTodos,
  toggleTodoAsCompleted,
  uncompletedTodosCount,
};
