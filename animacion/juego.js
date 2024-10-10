$(document).ready(function() {
    const canvas = document.getElementById('juegoCanvas');
    const ctx = canvas.getContext('2d');

    let puntos = 0;
    let juegoActivo = false;
    let cuadradoVelocidad = 2; // Velocidad horizontal del cuadrado

    // Clase para el cuadrado
    class Cuadrado {
        constructor(x, y, width, height) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.color = '#FF0000'; // Rojo
        }

        dibujar() {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }

        mover() {
            this.x += cuadradoVelocidad;

            // Rebotar en los bordes del canvas
            if (this.x + this.width > canvas.width || this.x < 0) {
                cuadradoVelocidad *= -1;
            }
        }
    }

    // Clase para los círculos
    class Circulo {
        constructor(x, y, radius, velocidadX, velocidadY, color) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.velocidadX = velocidadX;
            this.velocidadY = velocidadY;
            this.color = color;
        }

        dibujar() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        mover() {
            this.x += this.velocidadX;
            this.y += this.velocidadY;

            // Rebotar en los bordes del canvas
            if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
                this.velocidadX *= -1;
            }

            if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
                this.velocidadY *= -1;
            }
        }
    }

    // Crear el cuadrado y círculos
    let cuadrado = new Cuadrado(canvas.width / 2 - 15, canvas.height / 2 - 15, 30, 30);
    let circulos = [
        new Circulo(100, 100, 20, 2, 2, '#0000FF'), // Azul
        new Circulo(200, 200, 20, -2, 2, '#0000FF'),
        new Circulo(300, 300, 20, 2, -2, '#0000FF'),
        new Circulo(400, 400, 20, -2, -2, '#0000FF'),
        new Circulo(500, 100, 20, 2, 1, '#0000FF'),
        new Circulo(600, 200, 20, -1, 2, '#0000FF'),
        new Circulo(700, 300, 20, 1, -1, '#0000FF'),
        new Circulo(100, 500, 20, -1, -1, '#0000FF')
    ];

    // Iniciar el juego
    $('#iniciarBtn').click(function() {
        iniciarJuego();
        $(this).hide("slide", { direction: "left" }, 500); // Ocultar con animación
        $('#reiniciarBtn').show("slide", { direction: "right" }, 500); // Mostrar con animación
    });

    // Reiniciar el juego
    $('#reiniciarBtn').click(function() {
        reiniciarJuego();
        $('#iniciarBtn').show();
        $(this).hide();
    });

    // Cambiar la velocidad de los triángulos
    $('#velocidad').on('input', function() {
        let velocidad = parseFloat($(this).val());
        // Aquí agregarías la lógica para cambiar la velocidad de los triángulos si se necesita
    });

    // Iniciar las animaciones del juego
    function iniciarJuego() {
        juegoActivo = true;
        requestAnimationFrame(actualizar);
    }

    // Reiniciar elementos del juego
    function reiniciarJuego() {
        puntos = 0;
        cuadrado = new Cuadrado(canvas.width / 2 - 15, canvas.height / 2 - 15, 30, 30);
        circulos.forEach(circulo => {
            circulo.x = Math.random() * canvas.width;
            circulo.y = Math.random() * canvas.height;
        });
        juegoActivo = false;
        gsap.killTweensOf('*'); // Detener todas las animaciones
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas
    }

    // Dibujar elementos en el canvas
    function dibujar() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cuadrado.dibujar();
        circulos.forEach(circulo => circulo.dibujar());
    }

    // Actualizar la animación
    function actualizar() {
        if (juegoActivo) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            cuadrado.mover();
            cuadrado.dibujar();

            circulos.forEach(circulo => {
                circulo.mover();
                circulo.dibujar();
            });

            requestAnimationFrame(actualizar);
        }
    }
});
