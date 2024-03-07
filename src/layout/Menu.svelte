<script>
  import Icon from "@iconify/svelte";
</script>

<div class="navbar">
  <div class="navbar-start">
    <a class="btn btn-ghost text-xl" href="/"
      ><Icon icon="solar:home-bold" class="big-icon" /></a
    >
  </div>
  <div class="navbar-center">
    <a class="btn btn-ghost text-xl" href="/tasks">Tasks</a>
    <a class="btn btn-ghost text-xl" href="/rewards">Rewards</a>
    <a class="btn btn-ghost text-xl" href="/household">Household </a>
  </div>
  <div class="navbar-end"></div>
  <a class="btn btn-ghost text-xl" href="/mypage"
    ><Icon icon="ph:smiley-duotone" class="big-icon" /></a
  >
</div>

<style lang="postcss">
  div :global(.big-icon) {
    font-size: 35px;
  }
</style>
