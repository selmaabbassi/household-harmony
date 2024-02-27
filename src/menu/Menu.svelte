<script>
  import Home from "./Home.svelte";
  import Tasks from "./Tasks.svelte";
  import Rewards from "./Rewards.svelte";
  import Household from "./Household.svelte";
  import Icon from "@iconify/svelte";

  export let menu = 1;
</script>

<div class="navbar">
  <div class="navbar-start"></div>
  <div class="navbar-center">
    <a
      class="btn btn-ghost text-xl"
      href="/"
      on:click|preventDefault={() => (menu = 1)}
      ><Icon icon="solar:home-bold" class="big-icon" /></a
    >
    <a
      class="btn btn-ghost text-xl"
      href="/"
      on:click|preventDefault={() => (menu = 2)}
      >Tasks <Icon icon="material-symbols:task" class="big-icon" /></a
    >
    <a
      class="btn btn-ghost text-xl"
      href="/"
      on:click|preventDefault={() => (menu = 3)}
      >Rewards <Icon icon="material-symbols:rewarded-ads" class="big-icon" /></a
    >
    <a
      class="btn btn-ghost text-xl"
      href="/"
      on:click|preventDefault={() => (menu = 4)}
      >Household <Icon
        icon="material-symbols:family-restroom"
        class="big-icon"
      /></a
    >
  </div>
  <div class="navbar-end"></div>
</div>

{#if menu === 1}
  <Home />
{:else if menu === 2}
  <Tasks />
{:else if menu === 3}
  <Rewards />
{:else if menu === 4}
  <Household />
{:else}
  <h1>Page Not Found</h1>
{/if}

<style lang="postcss">
  div :global(.big-icon) {
    font-size: 35px;
  }
</style>
