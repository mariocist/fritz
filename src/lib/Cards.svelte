<script>
    const categories = ["general", "business", "entertainment", "health", "science", "sport", "technology"]
    const countries = ["us", "mx", "de", "ar", "ru", "co", "au"]

	import { currentCountry, currentCategory } from './stores'

	const changeCategory = (category) => {
		currentCategory.set(category)
	}
	const changeCountry = (country) => {
		currentCountry.set(country)
	}
</script>

<main>
    <div>
	{#each countries as country}
	    <button 
	 class:selected="{$currentCountry === country}"
	 on:click="{() => changeCountry(country)}"
	 >{country.toUpperCase()}</button>
	{/each}
    </div>
    <div>
	{#each categories as category}
	    <button 
	 class:selected="{$currentCategory === category}"
	 on:click="{() => changeCategory(category)}"
	 >{ category[0].toUpperCase() + category.substring(1) }</button>
	{/each}
    </div>
</main>

<style>
    div {
		padding-left: 4rem;
		margin-top: 1rem;
    }
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
