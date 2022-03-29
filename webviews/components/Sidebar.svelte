<!--
    /////////////////////////////////////////
    // SCRIPTS
    /////////////////////////////////////////
-->

<script lang="ts">
    let count = 0;
    let tag_name = ''; 
    //let text = '';
    //let items : Array<string> = [];
</script>

<!--
    /////////////////////////////////////////
    // STYLES 
    /////////////////////////////////////////
-->
<style>
    .btn-half{
        width: 50%;
        display: inline-block;
    }
    .d-flex{
        display: flex;
    }

    .mr-1{
        margin-right: 8px;
    }

</style>


<!--
    /////////////////////////////////////////
    // HTML 
    /////////////////////////////////////////
-->

<h2>Gulp :</h2>
<button on:click={() => {tsvscode.postMessage({ type: 'command', value: "npm run start:dev" });}}>Start project</button>
<button on:click={() => {tsvscode.postMessage({ type: 'command', value: "npm run build:project" });}}>Build project</button>

<br>

<h2>Sync :</h2>
<p>Don't forget to <a on:click={() => {tsvscode.postMessage({ type: 'command', value: "npm run build:project" });}}> build project</a> first</p>
<button on:click={() => {tsvscode.postMessage({ type: 'command', value: "npm run sync -- USING dist/uniqagroup2020/sync-config.json --actions" });}}>List of actions</button>
<div class="d-flex">
    <button class="btn-half mr-1" on:click={() => {tsvscode.postMessage({ type: 'command', value: "npm run sync -- USING dist/uniqagroup2020/sync-config.json --actions WRITE.styles;" });}}>Styles</button>
    <button class="btn-half" on:click={() => {tsvscode.postMessage({ type: 'command', value: "npm run sync -- USING dist/uniqagroup2020/sync-config.json --actions WRITE.scripts;" });}}>Scripts</button>
</div>
<p>Sync tag :</p>
<input type="text" bind:value={tag_name} placeholder="Please input only tag name">
<div class="d-flex">
    <button class="btn-half mr-1" on:click={() => {tsvscode.postMessage({ type: 'command', value: `npm run sync -- USING dist/uniqagroup2020/sync-config.json --actions WRITE.tags.${tag_name};` });}}>WRITE</button>
    <button class="btn-half" on:click={() => {tsvscode.postMessage({ type: 'command', value: `npm run sync -- USING dist/uniqagroup2020/sync-config.json --actions READ.tags.${tag_name};` });}}>READ</button>
</div>

<br>

<h2>Git :</h2>
<button on:click={() => {tsvscode.postMessage({ type: 'command', value: "git fetch" });}}>Fetch</button>
<button on:click={() => {tsvscode.postMessage({ type: 'command', value: "git pull origin master" });}}>Pull master</button>
<button on:click={() => {tsvscode.postMessage({ type: 'command', value: "open https://git.uniqa.at/git/projects/WCMS/repos/uniqa-cms-uniqagroup-fe/browse" });}}>Bitbucket</button>

<br>

<h2>Links :</h2>
<button on:click={() => {tsvscode.postMessage({ type: 'command', value: "open https://jira.uniqagroup.com/secure/RapidBoard.jspa" });}}>Backlog</button>
<button on:click={() => {tsvscode.postMessage({ type: 'command', value: "open https://cms-dev.uniqa.at/" });}}>CMS DEV</button>
<button on:click={() => {tsvscode.postMessage({ type: 'command', value: "open https://cms-test.uniqa.at/" });}}>CMS TEST</button>
<button on:click={() => {tsvscode.postMessage({ type: 'command', value: "open https://cms-prod.uniqa.at/" });}}>CMS PROD</button>


<br>
<br>
<br>
<br>
<br>
<button style="background-color: crimson;" on:click={() => {tsvscode.postMessage({ type: 'command', value: "open https://youtu.be/dQw4w9WgXcQ" });}}>Do not click !</button>

<!--

<h1>{count}</h1>
<button on:click={() => {count++;}}>{count}</button>

<form on:submit|preventDefault={() =>{
    items = [text, ...items];
    text = '';
}}>  
    <input type="text" bind:value={text}>
    <button class="btn-half">WRITE</button>
    <button class="btn-half">READ</button>
</form>

-->

<!--
<ul>
    {#each items as item}
    <li>{item}</li>
    {/each}
</ul >
-->