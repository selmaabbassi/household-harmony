<script>
  import Tasks from "../components/Tasks.svelte";
  import CompletedTasks from "../components/CompletedTasks.svelte";
  export let data;
</script>

<div class="container mx-auto mt-10">
  <div class="grid grid-cols-2 gap-3 content-evenly ...">
    <div>
      <h1>Manage tasks</h1>
      <Tasks {data} />
    </div>
    <div>
      <h1>Completed Tasks</h1>
      <CompletedTasks {data} />
    </div>
  </div>
</div>
