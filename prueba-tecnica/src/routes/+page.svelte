<script>
	let { data } = $props();
	import Card from '$lib/Card.svelte';
</script>

<h1>Rick & Morty API</h1>

<div class="grid">
    
	<!-- 
    
        # en un each significa apertura de bloque
        / significa cierre de bloque

        Analicémosla palabra por palabra:

            - {: "Svelte, despierta".
            
            -  #: "Voy a darte una orden de bloque".

            - each: "Recorre cada elemento...".

            - data.characters: "...de esta lista concreta...".

            - as: "...y temporalmente llámalo...".

            - char: "...char".

            - }: "Fin de la instrucción, vuelve al HTML".

    -->

	{#each data.characters as char}
		<Card characters={char} />
	{/each}
</div>

<style>
	/* El estilo de la GRID se queda aquí, el de la CARTA se fue al otro archivo */
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		gap: 10px;
	}
</style>
