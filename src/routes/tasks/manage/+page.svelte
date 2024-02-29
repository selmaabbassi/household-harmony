<script>
  export let data;
</script>

<h1>MANAGE TASKS</h1>
<ul>
  {#each data.allTasks as { title, difficulty }}
    <li>Name: {title}, Difficulty: {difficulty}</li>
  {/each}
</ul>

<style lang="postcss">
</style>
