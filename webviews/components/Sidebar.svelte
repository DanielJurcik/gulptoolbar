<script lang="ts">
    let count = 0;
    let text = '';
    let items : Array<string> = [];
</script>

<h1>{count}</h1>
<button on:click={() => {count++;}}>{count}</button>

<h2>Sync tool:</h2>

<p>Sync tag :{text}</p>
<form on:submit|preventDefault={() =>{
    items = [text, ...items];
    text = '';
}}>  
    <input type="text" bind:value={text}>
    <input type="submit" value="Add item">
</form>

<ul>
    {#each items as item}
    <li>{item}</li>
    {/each}
</ul >


<button
        on:click={() => {
            tsvscode.postMessage({ type: 'command', value: "git clone" });
        }}>Test button</button>
