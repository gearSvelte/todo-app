import { mount } from 'svelte';
import './app.css';
import TodoList from './lib/TodoList.svelte';

const app = mount(TodoList, {
  target: document.body,
});

export default app;
