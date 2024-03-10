<script>
  export let data;

  const completed = data.tasks.filter((task) => {
    return task.data.completed === true;
  });
</script>

{#each completed as task}
  <div>{task.data.title} - {task.data.difficulty}</div>
{/each}
