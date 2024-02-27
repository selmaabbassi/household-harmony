<script>
  import { onMount } from "svelte";

  let dialog;
  onMount(() => {
    dialog = document.getElementById("my_modal_1");
  });

  const showDialogClick = (asModal = true) => {
    dialog[asModal ? "showModal" : "show"]();
  };

  const onSubmit = () => {
    console.log("SUBMITTED");
  };
</script>

<div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="task.png" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Tasks</h2>
    <p>Create your tasks here!</p>
    <div class="card-actions justify-end">
      <button class="btn" on:click={() => showDialogClick(true)}
        >Create task</button
      >

      <dialog id="my_modal_1" class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Create your task</h3>
          <p class="py-4">
            <label class="input input-bordered flex items-center gap-2">
              Name
              <input type="text" class="grow" />
            </label>
            <br />
            <select class="select select-bordered flex w-full">
              <option disabled selected>Choose difficulty</option>
              <option>Easy (1p)</option>
              <option>Medium (5p)</option>
              <option>Hard (10p)</option>
            </select>
          </p>
          <div class="modal-action">
            <form method="dialog">
              <button class="btn">Close</button>
              <button class="btn" on:click={() => onSubmit()}>Submit</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  </div>
</div>
