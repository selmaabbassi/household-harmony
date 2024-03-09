<script>
  import TaskList from "../components/TaskList.svelte";
  import CompleteTasks from "../components/CompleteTasks.svelte";
  export let data;
</script>

<div class="container mx-auto mt-10">
  <div class="grid grid-cols-2 gap-3 content-evenly ...">
    <div>
      <h1>Manage tasks</h1>
      <TaskList {data} />
    </div>
    <div>
      <h1>Completed Tasks</h1>
      <CompleteTasks {data} />
    </div>
  </div>
</div>
