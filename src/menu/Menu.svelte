<script>
  import Home from "./Home.svelte";
  import Today from "./Today.svelte";
  import Weekly from "./Weekly.svelte";
  import Monthly from "./Monthly.svelte";

  export let menu = 1;
</script>

<div class="navbar">
  <div class="navbar-start"></div>
  <div class="navbar-center">
    <a
      class="btn btn-ghost text-xl"
      href="/"
      on:click|preventDefault={() => (menu = 1)}>Home</a
    >
    <a
      class="btn btn-ghost text-xl"
      href="/"
      on:click|preventDefault={() => (menu = 2)}>Today</a
    >
    <a
      class="btn btn-ghost text-xl"
      href="/"
      on:click|preventDefault={() => (menu = 3)}>This Week</a
    >
    <a
      class="btn btn-ghost text-xl"
      href="/"
      on:click|preventDefault={() => (menu = 4)}>This Month</a
    >
  </div>
  <div class="navbar-end"></div>
</div>

{#if menu === 1}
  <Home />
{:else if menu === 2}
  <Today />
{:else if menu === 3}
  <Weekly />
{:else if menu === 4}
  <Monthly />
{:else}
  <h1>Page Not Found</h1>
{/if}

<style lang="postcss">
</style>
