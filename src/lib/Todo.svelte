<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  import { fade } from 'svelte/transition';
  import type { ITodo } from '../types';

  export let todo: ITodo;
</script>

<li class="todo" transition:fade>
  <input
    type="checkbox"
    checked={todo.done}
    on:change={() => dispatch('done')}
  />
  <span class={'done-' + todo.done}>{todo.text}</span>
  <button on:click={() => dispatch('delete')} type="button">delete</button>
</li>

<style>
  .todo:not(:last-child) {
    margin-bottom: 5px;
  }
  .done-true {
    color: grey;
    text-decoration: line-through;
  }
</style>
