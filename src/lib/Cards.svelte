<script>
    const categories = ["general", "business", "entertainment", "health", "science", "sport", "technology"]
    let current = 'general'
</script>

<main>
    <div>
	{#each categories as category}
	    <button 
	 class:selected="{current === category}"
	 on:click="{() => current = category}"
	 >{ category[0].toUpperCase() + category.substring(1) }</button>
	{/each}
    </div>
</main>

<style>
    button {
	outline: none;
	border: 1px solid #928374;
        background-color: white;
	color: #282828;
	padding: 0.5rem;
	margin: 0.3rem;
	border-radius: 0 0 15px 0;
	cursor: pointer;
	font-size: 12px;
    }
    button:hover {
	border: 1px solid #282828;
    }
    .selected {
	background-color: #282828;
	color: white;
    }
</style>
