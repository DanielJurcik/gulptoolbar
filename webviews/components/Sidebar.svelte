<script lang="ts">
    let count = 0;
    let text = '';
</script>

<h1>{count}</h1>
<button on:click={() => {count++;}}>{count}</button>

<h2>Sync tool:</h2>
<input type="text" bind:value={text}>
<p>Sync tag :{text}</p>