<script>
  import CompleteTask from "../../components/CompleteTask.svelte";
  import CreateTask from "../../components/CreateTask.svelte";
  import ManageTask from "../../components/ManageTask.svelte";
  export let data;
</script>

<div class="container mx-auto mt-40">
  <div class="grid grid-cols-3 gap-2 content-evenly ...">
    <CreateTask />
    <ManageTask />
    <CompleteTask />

    <ul class="todos w-1/2">
      <form method="POST" action="?/create">
        <input
          type="text"
          name="task-title"
          placeholder="Task!"
          class="input input-bordered w-full max-w-xs"
        />
      </form>
      {#each data.tasks as { title, difficulty }}
        <li>{title} - {difficulty}</li>
      {/each}

      <!-- {#each data.tasks as task (task.id)}
        <li>
          <form method="POST" action="?/delete">
            <label class="label cursor-pointer">
              <input
                type="checkbox"
                class="checkbox"
                name="id"
                value={task.id}
              />
              <span class="label-text">{task.title}</span>
            </label>
          </form>
        </li>
      {/each} -->
    </ul>
  </div>
</div>

<style lang="postcss">
</style>
