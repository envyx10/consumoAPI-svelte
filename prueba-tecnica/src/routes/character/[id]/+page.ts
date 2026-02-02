import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ fetch, params }) => {
	const id = params.id;

	try {
		const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

		// Si es true el codigo es 200-290
		// Si es false ej - 400 o 500, entramos en este if
		// Al hacer esto, sveltekit busca desesperadamente un archivo llamada +error.svelte
		if (!response.ok) {
			if (response.status === 404) {
				error(404, {
					message: '¡Vaya! Este personaje no existe en este universo. 🌌'
				});
			}

			error(response.status, {
				message: 'La API de Rick & Morty ha fallado (Error ${response.status}) '
			});
		}

		const char = await response.json();

		return {
			characters: char
		};
	} catch (err: unknown) {
		// Si el error tiene la propiedad status, es un error de SvelteKit
		if (err && typeof err === 'object' && 'status' in err) {
			throw err;
		}

		error(503, {
			message: 'No se pudo conectar con el servidor. Revisa tu internet.'
		});
	}
};
