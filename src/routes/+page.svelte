<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { invoke } from "@tauri-apps/api/core";

  let name = "";
  let greetMsg = "";

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    greetMsg = await invoke("greet", { name });
  }
</script>

<div class="m-4 p-4">
  <h1 class="font-bold text-red-500 text-4xl">Welcome to Tauri!</h1>
  <ul class="mt-4 p-3 space-y-1 list-disc">
    <li>HTMLあいう</li>
    <li>JS Lorem</li>
    <li>JS</li>
  </ul>

  <form on:submit|preventDefault={greet}>
    <Input id="greet-input" placeholder="Enter a name..." bind:value={name} />
    <Button type="submit">Greet</Button>
  </form>

  <p>{greetMsg}</p>
</div>
