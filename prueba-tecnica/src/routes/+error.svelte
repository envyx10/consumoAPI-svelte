<script lang="ts">
	// 'page' es un almacén mágico que tiene info sobre dónde estamos
	// y qué error ha ocurrido.
	import { page } from '$app/state';
</script>

<div class="error-zone">
	<h1>🔦 Error {page.status}</h1>

	<p>{page.error?.message}</p>

	<img src="https://media.tenor.com/t7rftXTUB88AAAAM/rick-and-morty.gif" alt="Rick confundido" />

	<br />

	<a href="/" class="btn">🚀 Volver a la base</a>
</div>

<style>
	.error-zone {
		text-align: center;
		padding: 50px;
		color: #333;
		font-family: sans-serif;
	}

	h1 {
		font-size: 4rem;
		margin-bottom: 0.5rem;
		color: #e11d48; /* Rojo alarma */
	}

	p {
		font-size: 1.5rem;
		color: #666;
	}

	img {
		margin: 30px 0;
		border-radius: 15px;
		max-width: 300px;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
	}

	.btn {
		display: inline-block;
		background: #111;
		color: white;
		padding: 15px 30px;
		text-decoration: none;
		border-radius: 50px;
		font-weight: bold;
		transition: transform 0.2s;
	}

	.btn:hover {
		transform: scale(1.05);
		background: #333;
	}
</style>
