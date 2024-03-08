<script>
  import { enhance } from "$app/forms";
  import Icon from "@iconify/svelte";
  export let data;
</script>

{#each data.tasks as task (task.id || task.title)}
  <form method="POST" use:enhance action="?/delete">
    <label class="label cursor-pointer">
      <input type="hidden" name="id" value={task.id} />
      <span class="label-text">{task.title} - {task.difficulty}</span>
      <button class="btn btn-primary btn-sm"
        ><Icon icon="mdi:garbage"></Icon></button
      >
    </label>
  </form>
{/each}
