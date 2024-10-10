function calcularEdad() {
    const anioNacimiento = document.getElementById('anioNacimiento').value;
    const anioActual = new Date().getFullYear();
    const edad = anioActual - anioNacimiento;

    const resultado = document.getElementById('resultado');

    if (anioNacimiento && edad >= 0) {
        resultado.textContent = `Tienes ${edad} años.`;
    } else {
        resultado.textContent = "Por favor, ingresa un año válido.";
    }
}
