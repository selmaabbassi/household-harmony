<script>
  import { enhance } from "$app/forms";
  import Icon from "@iconify/svelte";
  import { DIFFICULTY } from "../../../enums/DifficultyType";
  export let data;
</script>

{#each data.tasks as task (task.id || task.data.title)}
  <div class="button-container">
    <form method="POST" use:enhance>
      <label class="label cursor-pointer">
        <input type="hidden" name="id" value={task.id} />
        <input
          type="text"
          name="task-title"
          class="input"
          value={task.data.title}
          required
        />
        <select
          class="select select-bordered flex w-full"
          name="task-difficulty"
          value={task.data.difficulty}
        >
          <option value={DIFFICULTY.Easy.label}>Easy (1p)</option>
          <option value={DIFFICULTY.Medium.label}>Medium (5p)</option>
          <option value={DIFFICULTY.Hard.label}>Hard (10p)</option>
        </select>
        <button formaction="?/delete" class="btn btn-primary btn-sm"
          ><Icon icon="mdi:garbage"></Icon></button
        >
        <button formaction="?/complete" class="btn btn-primary btn-sm"
          ><Icon icon="mdi:check"></Icon></button
        >
        <button formaction="?/edit" class="btn btn-accent btn-sm"
          ><Icon icon="mdi:pencil"></Icon></button
        >
      </label>
    </form>
  </div>
{/each}

<style>
  .button-container {
    display: flex;
    align-items: center;
    margin-bottom: 10px; /* Adjust as needed */
  }
  .label {
    display: inline-block;
    margin-right: 10px; /* Adjust as needed */
  }
</style>
