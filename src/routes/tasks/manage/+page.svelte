<script>
  import TaskList from "../components/TaskList.svelte";
  export let data;
</script>

<div class="container mx-auto mt-10">
  <h1>Manage tasks</h1>
  <TaskList {data} />
</div>
