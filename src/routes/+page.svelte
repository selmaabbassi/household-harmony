<script>
  import Footer from "../footer/Footer.svelte";
  import Menu from "../menu/Menu.svelte";
</script>

<Menu />
<Footer />

<style>
  :global(body) {
    background-color: #cfe2f3;
    color: #283037;
    transition: background-color 0.3s;
  }
  :global(body.dark-mode) {
    background-color: #283037;
    color: #cfe2f3;
  }
</style>
