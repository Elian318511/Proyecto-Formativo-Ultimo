document.addEventListener("DOMContentLoaded", function() {
    const anuncio = document.getElementById('anuncioPidaYa');
    let visible = false;

    // Función para alternar la visibilidad del anuncio
    setInterval(() => {
        visible = !visible;
        anuncio.style.display = visible ? 'block' : 'none';
    }, 3000); // Cambia cada 3 segundos (3000 milisegundos)
});
