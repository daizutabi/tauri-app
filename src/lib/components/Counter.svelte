<script lang="ts">
  let count: number = 0;
</script>

<button on:click={() => (count -= 1)} aria-label="減算">-</button>
{count}
<button on:click={() => (count += 1)} aria-label="加算">+</button>
