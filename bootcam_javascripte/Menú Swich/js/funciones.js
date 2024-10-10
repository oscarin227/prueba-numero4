
let btnOpcion = document.getElementById('btn-enviar');  // recibe el id del boton opción desde html
let divMostrar = document.getElementById('div-mostrar');



function menu() {  //declaramos la función
    let opcion = parseInt(document.getElementById('input1').value);


    if (opcion.value == "") {    // Este if verifica si los valores son numéricos
        alert('Por favor, ingrese opción válidos.');
        return;

    } else {

        switch (opcion) {
            case 1:
                //alert("Cargando Imagen");
                divMostrar.innerHTML = '<img src="/Trilogia.jpg" alt="Imagen" class="img-fluid">';
                break;

            case 2:
                //alert("Reproduciendo Video");
                divMostrar.innerHTML = '<iframe width="350" height="350" src="https://www.youtube.com/embed/_nZdmwHrcnw" title="The Fellowship of the Ring | The Lord of the Rings 4K Ultra HD | Warner Bros. Entertainment" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                break;
            case 3:
                //alert("Reproducir Audio");
                divMostrar.innerHTML ='<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/754357051&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/user-522454262" title="The Sound of Silence—Headphone Sound Demo Library" target="_blank" style="color: #cccccc; text-decoration: none;">The Sound of Silence—Headphone Sound Demo Library</a> · <a href="https://soundcloud.com/user-522454262/lst-3d-surround-sound-test-hd" title="LST 3D Surround Sound Test  HD || Use Headphones" target="_blank" style="color: #cccccc; text-decoration: none;">LST 3D Surround Sound Test  HD || Use Headphones</a></div>'
                break;

            case 4:
                //alert("Redirigir a una web");
                window.location.href="https://getbootstrap.com/"
                break;

            case 5:
                alert("Saliendo de la app");
                break;
            default:
                alert("Ingrese una opción del 1 al 5");  

        }
    }

}

btnOpcion.addEventListener('click', menu);  // addEventListener se mantiene a la escucha para registrar un evento a un objeto en específico