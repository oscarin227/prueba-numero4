
import sys
import pygame

# Inicializar Pygame
pygame.init()

# Configurar la pantalla
screen_width, screen_height = 1200, 800  
screen = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption("Vuelo del Cóndor")

# Cargar imágenes
tu_imagen = pygame.image.load("tomy.jpg")  
condor_imagen = pygame.image.load("condor.jpg")  

# Ajustar imágenes al tamaño de la pantalla
tu_imagen = pygame.transform.scale(tu_imagen, (400, 400))  
condor_imagen = pygame.transform.scale(condor_imagen, (400, 400))  

# Variables de posición
x_condor, y_condor = (screen_width // 2) - 200, (screen_height // 2) + 200  # Posición inicial del cóndor debajo del joven
x_joven, y_joven = (screen_width // 2) - 200, (screen_height // 2) - 200  # Posición del joven
velocidad = 5    # Velocidad de movimiento 
volando = False   # Estado inicial de vuelo hacia arriba
transicion = 255  # Valor inicial de la transición (cóndor visible)

# Bucle principal
while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

    # Lógica de transición
    if volando:
        transicion -= 5  # Hacer que el cóndor se vuelva más transparente
        if transicion <= 0:
            transicion = 0  # Asegurarse de que no sobrepase 0
    else:
        transicion = 255  # Reiniciar la transición cuando el cóndor no está volando

    # Lógica de movimiento
    if not volando:
        y_condor -= velocidad  # Simula el vuelo hacia arriba
        if y_condor < -100:  # Si el cóndor sale por la parte superior
            volando = True  # Cambia el estado a volando
    else:
        y_condor += velocidad  # Vuelve a la posición inicial
        if y_condor >= (screen_height // 2) + 200:
            volando = False  # Reiniciar el vuelo

    # Dibujar en la pantalla
    screen.fill((255, 255, 255))  # Fondo blanco

    # Mostrar la imagen del joven
    screen.blit(tu_imagen, (x_joven, y_joven))

    # Mostrar el cóndor con transición
    if volando:
        condor_transparente = condor_imagen.copy()
        condor_transparente.set_alpha(transicion)  # Ajustar la transparencia del cóndor
        screen.blit(condor_transparente, (x_condor, y_condor))  # Mostrar el cóndor

    pygame.display.flip()  # Actualizar la pantalla

    # Controlar la velocidad de la animación
    pygame.time.delay(30)