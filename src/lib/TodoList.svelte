<script lang="ts">
  import Todo from './Todo.svelte';
  import { Todos as todos } from '../data';
  import {
    getAllTodos,
    archiveCompletedTodos,
    uncompletedTodosCount,
    deleteTodo,
    toggleTodoAsCompleted,
  } from '../helpers';

  $: message = `${uncompletedTodosCount()} of ${getAllTodos().length} remaining.`;
</script>

<div>
  <h1 class="title">to do list</h1>
  <div>
    {message}
    <button type="button" on:click={() => archiveCompletedTodos()}
      >archive completed</button
    >
  </div>
  <form on:submit|preventDefault></form>
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
