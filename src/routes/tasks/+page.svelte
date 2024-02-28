<script>
  import CompleteTask from "../../components/CompleteTask.svelte";
  import CreateTask from "../../components/CreateTask.svelte";
  import ManageTask from "../../components/ManageTask.svelte";
</script>

<div class="container mx-auto mt-40">
  <div class="grid grid-cols-3 gap-4 content-evenly ...">
    <CreateTask />
    <ManageTask />
    <CompleteTask />
  </div>
</div>

<style lang="postcss">
</style>
