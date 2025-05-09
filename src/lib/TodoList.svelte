<script lang="ts">
  import Todo from './Todo.svelte';
  import { Todos } from '../data';
  import {
    archiveCompletedTodos,
    deleteTodo,
    toggleTodoAsCompleted,
    addTodo,
    uncompletedTodosCount,
  } from '../helpers';

  let task = '';

  $: todos = $Todos;
  $: message = `${uncompletedTodosCount(todos)} of ${todos.length} remaining.`;
</script>

<div>
  <h1 class="title">to do list</h1>
  <div>
    {message}
    <button type="button" on:click={() => archiveCompletedTodos()}
      >archive completed</button
    >
  </div>
  <form on:submit|preventDefault>
    <input type="text" placeholder="enter new task here" bind:value={task} />
    <button
      disabled={!task}
      type="submit"
      on:click={() => {
        addTodo(task);
        task = '';
      }}>add task</button
    >
  </form>
  <ul>
    {#each todos as todo}
      <Todo
        {todo}
        on:delete={() => deleteTodo(todo.id)}
        on:done={() => toggleTodoAsCompleted(todo)}
      />
    {/each}
  </ul>
</div>

<style>
  .title {
    text-transform: capitalize;
  }
</style>
