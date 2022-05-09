<!--
    /////////////////////////////////////////
    // SCRIPTS
    /////////////////////////////////////////
-->

<script lang="ts">

    let sync_type = 'tags.';
    let tag_name = ''; 
    let enviroment = 'DEV';
    let text = '';
    let items : Array<string> = [];
</script>

<!--
    /////////////////////////////////////////
    // STYLES 
    /////////////////////////////////////////
-->
<style>

    h2,h3,h4,h5,input,button,p,select{
        margin-bottom: 6px;
        margin-top: 6px;
        padding-top: 6px;
        padding-bottom: 6px;
    }    

    .gulp-toolbar-wrapper h3{
        /*background-color: #00406c;
        margin-left: calc(var(--container-paddding) * -1);
        margin-right: calc(var(--container-paddding) * -1);*/
        margin-bottom: 10px;
        font-weight: 600;
        text-transform: uppercase;
        margin-top: 18px;
        border-bottom: 2px solid white;
    }

    .clickable{
        cursor: pointer;
        text-decoration: underline;
    }

    .gulp-toolbar-wrapper{
        background-image: url('media/uniqa_loop.svg');
    }

    .gulp-toolbar-wrapper > hr{
        margin-top: 32px;
        margin-bottom: 32px;
    }

    .row-wrapper{
        display: flex;
    }
    .row-wrapper > *{
        flex-grow: 1;
        margin-right: 8px;
    }

    .row-wrapper > *:last-child{
        margin-right: 0;
    }

    .select-prefix, .flex-shrink{
        flex-shrink: 2;
    }
</style>

<!--
    /////////////////////////////////////////
    // HTML 
    /////////////////////////////////////////
-->
<div class="gulp-toolbar-wrapper">
    
    <section class="gulp">
        <h3>Gulp :</h3>
        <!-- Start project -->
        <div class="row-wrapper">
            <button on:click={() => {tsvscode.postMessage({ 
                type: 'terminal', 
                value: {
                    command: 'npm run start:dev', 
                    terminalName: 'Project'
                }
                });}}>Start</button>
        
            <!-- Build project -->
            <button on:click={() => {tsvscode.postMessage({
                type: 'terminal', 
                value: {
                    command: 'npm run build:project', 
                    terminalName: 'Build'
                }
            });}}>Build</button>
        </div>
    </section>
    
    <section class="sync">
        <h3>Sync :</h3>

        <label for="enviroment">Enviroment :</label>
        <select bind:value={enviroment} name="enviroment">
            <option value="DEV">DEV</option>
            <option value="TEST">TEST</option>
        </select>
    
        <p>Don't forget to <b class="clickable" on:click={() => {tsvscode.postMessage({ 
            type: 'terminal', 
            value: {
                command: 'npm run build:project', 
                terminalName: 'Build'
            } 
        });}}>build project</b> first</p>
    
        <!-- List of actions -->
        <button on:click={() => {tsvscode.postMessage({ 
            type: 'terminal', 
            value: {
                command: 'npm run sync -- USING dist/uniqagroup2020/sync-config.json --actions',
                terminalName: 'Sync'
            }
        });}}>List of actions</button>
    
        <div class="row-wrapper">
            <!-- Sync styles -->    
            <button on:click={() => {tsvscode.postMessage({ 
                type: 'terminal', 
                value: {
                    command: `npm run sync -- USING dist/uniqagroup2020/sync-config.json --actions --actions WRITE.styles --target ${enviroment}`,
                    terminalName: 'Sync > Styles'
                }
            });}}>Styles</button>
    
            <!-- Sync scripts -->
            <button on:click={() => {tsvscode.postMessage({ 
                type: 'terminal', 
                value: {
                    command: `npm run sync -- USING dist/uniqagroup2020/sync-config.json --actions --actions WRITE.scripts --target ${enviroment}`,
                    terminalName: 'Sync > Scripts'
                }
            });}}>Scripts</button>
        </div>
    
        <p>Sync > {enviroment} > {sync_type}{tag_name}</p>
        <div class="row-wrapper">
            <select class="select-prefix" bind:value={sync_type} name="sync_type">
                <option value="tags.">TAGS</option>
                <option value="datasources.">DATASOURCES</option>
                <option value="templates.">TEMPLATES</option>
                <option value="">-</option>
            </select>
            <input type="text" bind:value={tag_name} placeholder="Here insert the name">
        </div>
        <div class="row-wrapper">
            <!-- Sync styles -->    
            <button on:click={() => {tsvscode.postMessage({ 
                type: 'terminal', 
                value: {
                    command: `npm run sync -- USING dist/uniqagroup2020/sync-config.json --actions WRITE.${sync_type}${tag_name} --target ${enviroment}`,
                    terminalName: `Sync > WRITE > ${enviroment} >${sync_type}${tag_name}`
                }
            });}}>WRITE</button>
    
            <!-- Sync scripts -->
            <button on:click={() => {tsvscode.postMessage({ 
                type: 'terminal', 
                value: {
                    command: `npm run sync -- USING dist/uniqagroup2020/sync-config.json --actions READ-FILE.${sync_type}${tag_name}`,
                    terminalName: `Sync > REAR > ${enviroment} >${sync_type}${tag_name}`
                }
            });}}>READ-FILE</button>
        </div>
    </section>
    
    <section class="git">
        <h3>Git :</h3>
        <div class="row-wrapper">
            <button on:click={() => {tsvscode.postMessage({ 
                type: 'terminal', 
                value: {
                    command: `git fetch`,
                    terminalName: `GIT > Fetch`
                }
            });}}>Fetch</button>
    
            <button on:click={() => {tsvscode.postMessage({ 
                type: 'terminal', 
                value: {
                    command: `git pull origin master`,
                    terminalName: `GIT > Pull master`
                }
            });}}>Pull Master</button>
        </div>
    </section>
    
    <section class="links">
        <h3>Links :</h3>
        <div class="row-wrapper">
            <a href="https://git.uniqa.at/git/projects/WCMS/repos/uniqa-cms-uniqagroup-fe/browse/"><button>Bitbucket</button></a>
            <a href="https://jira.uniqagroup.com/secure/RapidBoard.jspa"><button>Backlog</button></a>
        </div>
        <div class="row-wrapper">
            <a href="https://cms-dev.uniqa.at/"><button>DEV</button></a>
            <a href="https://cms-dev.uniqa.at/"><button>TEST</button></a>
            <a href="https://cms-dev.uniqa.at/"><button>PROD</button></a>
        </div>    
    </section>

    <section class="todo-list">
        <h3>To do list :</h3>
        <form on:submit|preventDefault={() =>{
            items = [text, ...items];
            text = '';
        }}> 
            <div class="row-wrapper">
                <input type="text" bind:value={text}>
                <input class="flex-shrink"type="submit" value="Add">
            </div> 
        </form>

        <ul>
            {#each items as item}
            <li>{item}</li>
            {/each}
        </ul >
    </section>
</div>