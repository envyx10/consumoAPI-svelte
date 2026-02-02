
// QUE HACE ESTE IMPORT:
    // ./$types - Es una carpeta virtual donde sveltekit guarda las ''normas'' de nuestra pagina actual
    // PageLoad - Es el MANUAL DE INSTRUCCIONES oficial de como debe ser una funcion de carga ( load )
    //    ··· Dice cosas como '' Esta funcion debe recibir un fetch, puede recibir params( para la url ), debe devolver datos.
import type { PageLoad } from './$types';

// Esta función se ejecuta AUTOMÁTICAMENTE antes de que cargue la página
// EXPORT CONST LOAD: Creamos una constante llamada load 
// : PageLoad: ESTA ES LA CLAVE. Le estamos diciendo a TS '' Oye, esta variable load no es una funcion cualquiera. Cumple estrictamente las normas del manual PageLoad
//  = async ({ fetch }) => {···} :
// El fetch que esta como argumento es un fetch con superpoderes, no uno normal.
// Tambien
export const load: PageLoad = async ({ fetch }) => {
    
    // 1. Llamamos (igual que antes)
    const response = await fetch('https://rickandmortyapi.com/api/character');
    
    // 2. Traducimos (igual que antes)
    const data = await response.json();

    // 3. RETORNAMOS el paquete
    // En lugar de guardarlo en una variable, lo "enviamos" al componente
    return {
        characters: data.results
    };
}