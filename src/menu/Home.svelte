<script>
  import Form from '../Components/Form.svelte';

  let showForm = false;

  function openForm() {
    showForm = !showForm;

  }


</script>




<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="card w-96 bg-base-100 shadow-xl">
    <figure><img src="task.png" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">Tasks</h2>
      <p>Create your tasks here!</p>
      <div class="card-actions justify-end">
        <button on:click={openForm} class="btn btn-primary">Create Task</button>
      </div>
    </div>
  </div>

  <div class="flex justify-center items-center h-screen fixed top-0 left-0 w-full bg-gray-800 bg-opacity-50 z-50" style="display: {showForm ? 'block' : 'none'};">
    <Form
    showForm = {showForm}
    />
  </div>


  
  <!-- Add more components here -->

  
  
</div>


