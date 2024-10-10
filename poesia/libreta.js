$(document).ready(function() {
    // Ocultar la historia al cargar la página
    $('#historia').hide();

    // Manejar el evento de clic en el botón
    $('#mostrarHistoriaBtn').on('click', function() {
        $('#historia').toggle(); // Muestra u oculta el div de la historia
    });
});
