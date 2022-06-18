<script>
    import { onMount } from "svelte";

    const URL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=cdfccdbeeda14397a91a21b720361993"

    let results = []

    onMount(async () => {
	const res = await fetch(URL)
	let js = await res.json()
	results = (js.articles).filter((el) => el.urlToImage != null)
    })
</script>

<main>
    <div class="wrapper">
	{#each results as notice}
	    <div id="new">
		<img src="{notice.urlToImage}" alt="no-photo" width="280px">
		<h1>{notice.title}</h1>
		<p>{notice.description}</p>
		<button><a href="{notice.url}">Visit</a></button>
	    </div>
	{/each}
    </div>
</main>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap');
    .wrapper {
	margin: 1rem;
	margin-right: 4rem;
	display: grid;
	gap: 20px;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: auto;
	padding: 2rem;
    }
    h1 {
	font-size: 20px;
	font-family: 'Roboto Slab', serif;
	font-weight: 400;
    }
    p {
	font-size: 18px;
	font-family: 'Source Sans Pro', sans-serif;
    }
    button {
	border: 1px solid #1e1e1e;
	color: #1e1e1e;
	outline: none;
	background-color: #1e1e1e;
	border-radius: 0 0 10px 0;
	padding: 0.5rem;
	cursor: pointer;
    }
    a {
	color: white;
	text-decoration: none;
    }
</style>
