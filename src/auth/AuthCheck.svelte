<script lang="ts">
  import { user } from "$lib/server/auth";
</script>

{#if $user}
  <slot user={$user} />
{:else}
  <slot name="login" />
{/if}
