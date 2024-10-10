$(document).ready(function() {
    // Al pasar el mouse por el primer <div> "text1" se mostrará el segundo y al salir de él se ocultará nuevamente
    $("#text1").mouseenter(function() {
        $("#text2").show();
    }).mouseleave(function() {
        $("#text2").hide();
    });

    // Al hacer clic en el <div> id "caja2" la imagen deberá agrandarse un 100% y al salir de ella, volver a su tamaño inicial
    $("#caja2").click(function() {
        $("#img").animate({
            width: "100%"
        });
    }).mouseleave(function() {
        $("#img").animate({
            width: "20%"
        });
    });

    // Con el tercer <div> la letra se agrandará al hacer doble clic en él
    $("#caja3").dblclick(function() {
        $(this).css("font-size", "200px");
    });
});