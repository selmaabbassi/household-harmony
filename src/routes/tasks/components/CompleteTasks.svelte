<script>
  export let data;
  console.log(data);

  const completed = data.tasks.filter((task) => {
    return task.data.completed === true;
  });
  console.log(completed);
</script>

{#each completed as task}
  <div>{task.data.title} - {task.data.difficulty}</div>
{/each}
