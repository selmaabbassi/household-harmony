<script>
  const goToPage = () => {
    console.log("SUBMITTED");
  };
</script>

<div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="complete-task.svg" alt="task" /></figure>
  <div class="card-body">
    <div class="card-actions justify-center">
      <button class="btn" on:click={() => goToPage()}>Complete task</button>
    </div>
  </div>
</div>
