<script>
  import Icon from "@iconify/svelte";
  import ManageTask from "../../components/ManageTask.svelte";
  import CompleteTask from "../../components/CompleteTask.svelte";
  export let data;
</script>

<div class="container mx-auto mt-10">
  <div class="grid grid-cols-3 gap-2 content-evenly ...">
    <div class="card w-42 bg-base-100 shadow-xl">
      <figure><img src="create-task.svg" alt="Create task" /></figure>
      <div class="card-body">
        <div class="card-actions justify-center">
          <ul class="todos">
            <form method="POST" action="?/create">
              <div class="grid grid-cols-2 gap-1">
                <input
                  type="text"
                  name="task-title"
                  placeholder="Task!"
                  class="input input-bordered w-full max-w-xs"
                />
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
            </form>
            {#each data.tasks as { id, title, difficulty }}
              <form method="POST" action="?/delete">
                <label class="label cursor-pointer">
                  <input type="hidden" name="id" value={id} />
                  <span class="label-text">{title} - {difficulty}</span>
                  <button class="btn"><Icon icon="home"></Icon></button>
                </label>
              </form>
            {/each}
          </ul>
        </div>
      </div>
    </div>
    <ManageTask />
    <CompleteTask />
  </div>
</div>

<style lang="postcss">
</style>
