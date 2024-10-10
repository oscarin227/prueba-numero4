// URL de la API
const url = 'https://jsonplaceholder.typicode.com/posts';

// Crear un objeto con los datos a enviar
const datosDelPost = {
  title: 'Mi primer post',
  body: 'Este es el contenido del post',
  userId: 1
};

// Usar fetch para hacer una solicitud POST
fetch(url, {
  method: 'POST', // Especificamos que es una solicitud POST
  headers: {
    'Content-Type': 'application/json' // Indicamos que enviamos datos en formato JSON
  },
  body: JSON.stringify(datosDelPost) // Convertimos el objeto a una cadena JSON
})
  .then(respuesta => respuesta.json()) // Convertimos la respuesta a JSON
  .then(datos => {
    // Mostramos los datos devueltos en la consola
    console.log('Respuesta de la API:', datos);
  })
  .catch(error => {
    // Si ocurre un error, lo mostramos en la consola
    console.error('Hubo un error en la solicitud:', error);
  });
