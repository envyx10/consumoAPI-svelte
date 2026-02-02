<script>

    // Recibimos los datos del archivo .ts de arriba
    let { data } = $props();

    // Sacamos el personaje para escribir menos
    let { characters} = data;

</script>

<div class="container">
    <a href="/" class="back-btn">⬅ Volver al listado</a>

    <h1>{characters.name}</h1>
    
    <img src={characters.image} alt={characters.name} />
    
    <div class="info">
        <p><strong>Especie:</strong> {characters.species}</p>
        <p><strong>Estado:</strong> {characters.status}</p>
        <p><strong>Género:</strong> {characters.gender}</p>
        <p><strong>Origen:</strong> {characters.origin.name}</p>
    </div>
</div>

<style>
    /* Un poco de CSS básico para que no se vea horrible */
    .container { max-width: 800px; margin: 0 auto; text-align: center; padding: 20px; }
    img { border-radius: 50%; max-width: 300px; border: 5px solid #333; }
    .info { font-size: 1.2rem; margin-top: 20px; }
    .back-btn { display: inline-block; margin-bottom: 20px; text-decoration: none; color: #333; font-weight: bold;}
</style>