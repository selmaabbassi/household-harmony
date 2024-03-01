<script>
  import Icon from "@iconify/svelte";
  import ManageTask from "../../components/ManageTask.svelte";
  import CompleteTask from "../../components/CompleteTask.svelte";
  export let data;
</script>

<div class="container mx-auto mt-10">
  <div class="grid grid-cols-2 gap-2 content-evenly ...">
    <div class="card w-42 bg-base-100 shadow-xl">
      <figure><img src="create-task.svg" alt="Create task" /></figure>
      <div class="card-body">
        <div class="card-actions justify-center">
          <ul class="todos">
            <form method="POST" action="?/create">
              <div class="grid grid-cols-7 gap-1">
                <div class="col-span-3">
                  <input
                    type="text"
                    name="task-title"
                    placeholder="Task!"
                    class="input input-bordered w-full w-full"
                  />
                </div>
                <div class="col-span-3">
                  <select
                    class="select select-bordered flex w-full"
                    name="task-difficulty"
                  >
                    <option disabled selected>Choose difficulty</option>
                    <option>Easy (1p)</option>
                    <option>Medium (5p)</option>
                    <option>Hard (10p)</option>
                  </select>
                </div>
                <div class="col-span-1">
                  <button class="btn btn-secondary flex w-full"
                    ><Icon icon="mdi:arrow-down"></Icon></button
                  >
                </div>
              </div>
            </form>
            {#each data.tasks as task (task.id)}
              <form method="POST" action="?/delete">
                <label class="label cursor-pointer">
                  <input type="hidden" name="id" value={task.id} />
                  <span class="label-text"
                    >{task.title} - {task.difficulty}</span
                  >
                  <button class="btn btn-primary btn-sm"
                    ><Icon icon="material-symbols:check"></Icon></button
                  >
                </label>
              </form>
            {/each}
          </ul>
        </div>
      </div>
    </div>
    <ManageTask />
  </div>
</div>

<style lang="postcss">
</style>
