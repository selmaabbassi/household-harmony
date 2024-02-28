<script>
  import Icon from "@iconify/svelte";
</script>

<div class="navbar">
  <div class="navbar-start"></div>
  <div class="navbar-center">
    <a class="btn btn-ghost text-xl" href="/"
      >Home <Icon icon="solar:home-bold" class="big-icon" /></a
    >
    <a class="btn btn-ghost text-xl" href="/tasks"
      >Tasks <Icon icon="material-symbols:task" class="big-icon" /></a
    >
    <a class="btn btn-ghost text-xl" href="/rewards"
      >Rewards <Icon icon="material-symbols:rewarded-ads" class="big-icon" /></a
    >
    <a class="btn btn-ghost text-xl" href="/household"
      >Household <Icon
        icon="material-symbols:family-restroom"
        class="big-icon"
      /></a
    >
  </div>
  <div class="navbar-end"></div>
</div>

<style lang="postcss">
  div :global(.big-icon) {
    font-size: 35px;
  }
</style>
