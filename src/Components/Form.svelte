
  <script>
    export let showForm;
  </script>

{#if showForm}
    <div class="w-full h-full fixed top-0 left-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
      <div class="w-full max-w-xs bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Task
            </label>
            <input class="input input-bordered input-primary w-full" id="task" type="text" placeholder="Enter Task">
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="reward">
              Reward
            </label>
            <input class="input input-bordered input-danger w-full" id="password" type="text" placeholder="5">
          </div>
          <div class="flex items-center justify-between">
            <button class="btn btn-primary" type="button">
              Add Task
            </button>
            <button on:click={() => showForm = false} class="btn btn-primary" type="button">
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
    {/if}

  