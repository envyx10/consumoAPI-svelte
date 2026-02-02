<script lang="ts">
	// Definimos aqui las interfaces porque es el propio componmente quien pone las normas.
	interface Personaje {
		name: string;
		image: string;
		id: string;
	}

	interface Props {
		characters: Personaje;
	}

	// Definimos qué datos necesita esta carta para funcionar
	// $props() - es la puerta de entrada, Por aqui pasan los datos del padre
	// :Props - Es el portero de la discoteca
	let { characters }: Props = $props();
</script>

<a href="/character/{characters.id}" class="card">
	<img src={characters.image} alt={characters.name} />
	<h3>{characters.name}</h3>
</a>

<style>
	a {
		text-decoration: none;
		color: inherit;
		display: block;
	}

	.card {
		background: white;
		border-radius: 12px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra suave */
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease; /* Animación suave */
		cursor: pointer;
		overflow: hidden; /* Para que la imagen no se salga de las esquinas redondas */
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	/* ¡Efecto Hover! Al pasar el ratón */
	.card:hover {
		transform: translateY(-5px); /* Sube 5 píxeles */
		box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2); /* Sombra más fuerte */
	}

	img {
		width: 100%;
		height: 200px; /* Altura fija para que todas sean iguales */
		object-fit: cover; /* Recorta la imagen para que no se deforme */
	}

	h3 {
		margin: 0;
		padding: 1rem;
		font-size: 1.1rem;
		color: #333;
		text-align: center;
		font-family:
			system-ui,
			-apple-system,
			sans-serif;
	}
</style>
