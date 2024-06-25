<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import Counter from "$lib/components/Counter.svelte";
  import { invoke } from "@tauri-apps/api/core";

  let name = "";
  let greetMsg = "";

  async function greet() {
    greetMsg = await invoke("greet", { name });
  }

  function handleClink(e: MouseEvent) {
    console.log(e);
  }
</script>

<div class="m-4 p-4 space-y-2">
  <form on:submit|preventDefault={greet}>
    <Input id="greet-input" placeholder="Enter a name..." bind:value={name} />
    <Button type="submit">Greet</Button>
  </form>
  <p>{greetMsg}</p>

  <div><Button on:click={handleClink}>ほたん</Button></div>

  <Counter />
</div>
