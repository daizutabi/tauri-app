<script lang="ts">
  import { Button } from "$lib/components/ui/button";

  let count: number = 0;
</script>

<Button on:click={() => (count -= 1)} aria-label="減算">-</Button>
{count}
<Button on:click={() => (count += 1)} aria-label="加算">+</Button>
