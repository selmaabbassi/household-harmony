<script>
  import Icon from "@iconify/svelte";
  import { enhance } from "$app/forms";
  import ManageTask from "./components/ManageTask.svelte";
  import { DIFFICULTY } from "../../enums/DifficultyType";
</script>

<div class="container mx-auto mt-10">
  <div class="grid grid-cols-3 gap-3 content-evenly ...">
    <div class="card w-42 bg-base-100 shadow-xl">
      <figure><img src="create-task.svg" alt="Create task" /></figure>
      <div class="card-body">
        <div class="card-actions justify-center">
          <ul class="todos">
            <form method="POST" use:enhance action="?/create">
              <div class="grid grid-rows-3 gap-4">
                <input
                  type="text"
                  name="task-title"
                  placeholder="Name task"
                  class="input input-bordered w-full w-full"
                  required
                />
                <select
                  class="select select-bordered flex w-full"
                  name="task-difficulty"
                  required
                >
                  <option value={DIFFICULTY.Easy.label} selected
                    >Easy (1p)</option
                  >
                  <option value={DIFFICULTY.Medium.label}>Medium (5p)</option>
                  <option value={DIFFICULTY.Hard.label}>Hard (10p)</option>
                </select>
                <button class="btn btn-secondary flex w-full"
                  ><Icon icon="mdi:arrow-down"></Icon></button
                >
              </div>
            </form>
          </ul>
        </div>
      </div>
    </div>
    <ManageTask />
  </div>
</div>

<style lang="postcss">
</style>
