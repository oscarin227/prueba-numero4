const characterContainer = document.getElementById("characters");
const nextPageButton = document.getElementById("next-page");

let nextPageUrl = "https://swapi.dev/api/people/"; // Inicialmente la primera página

// Imágenes asignadas a cada personaje (URLs seguras o locales)
const characterimagenes = {
    "Luke Skywalker": "imagenes/imagen1.jpg",
    "Darth Vader": "imagenes/imagen2.jpg",
    "Leia Organa": "imagenes/imagen3.jpg",
    "C-3PO": "imagenes/imagen4.jpg",  // Corregido a .jpg
    "R2-D2": "imagenes/imagen5.jpg",
    "Owen Lars": "imagenes/imagen6.jpg",
    "Beru Whitesun lars": "imagenes/imagen7.jpg",
    "R5-D4": "imagenes/imagen8.jpg",
    "Biggs Darklighter": "imagenes/imagen9.jpg",
    "Obi-Wan Kenobi": "imagenes/imagen10.jpg",
    "Anakin Skywalker": "imagenes/imagen11.jpg",
    "Wilhuff Tarkin": "imagenes/imagen12.jpg",
    "Chewbacca": "imagenes/imagen13.jpg",
    "Greedo": "imagenes/imagen14.jpg",

};

// Función para cargar los personajes desde la API
async function loadCharacters(url) {
    if (!url) {
        nextPageButton.disabled = true;  // Deshabilitar el botón si no hay más páginas
        return;
    }

    const response = await fetch(url);
    const data = await response.json();
    const characters = data.results;
    nextPageUrl = data.next;  // Guardar el link de la siguiente página

    characters.forEach(character => {
        const characterElement = document.createElement("div");
        characterElement.classList.add("character");

        // Asignamos una imagen basada en el nombre del personaje
        const imageSrc = characterimagenes[character.name] || "https://via.placeholder.com/200"; // Imagen por defecto

        // Aquí agregamos la imagen, nombre y detalles
        characterElement.innerHTML = `
            <img src="${imageSrc}" alt="${character.name}" class="character-image">
            <h3>${character.name}</h3>
            <p><strong>Género:</strong> ${character.gender}</p>
            <p><strong>Altura:</strong> ${character.height} cm</p>
        `;

        // Hacemos que la imagen resalte al hacer clic
        characterElement.addEventListener("click", () => toggleSelection(characterElement));

        characterContainer.appendChild(characterElement);
    });
}

// Función para resaltar la imagen del personaje
function toggleSelection(characterElement) {
    const isSelected = characterElement.classList.contains("selected");
    if (isSelected) {
        characterElement.classList.remove("selected");
    } else {
        const selectedElements = document.querySelectorAll(".selected");
        selectedElements.forEach(element => element.classList.remove("selected")); // Deseleccionar otros
        characterElement.classList.add("selected");
    }
}

// Función para cargar la siguiente página de personajes
nextPageButton.addEventListener("click", () => {
    loadCharacters(nextPageUrl);
});

// Cargar los personajes de la primera página al inicio
loadCharacters(nextPageUrl);
