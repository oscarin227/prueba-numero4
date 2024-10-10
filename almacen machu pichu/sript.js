// Clase Producto
class Producto {
    constructor(id, nombre, descripcion, precio, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen; // Ruta de la imagen
    }
}

// Clase Carrito
class Carrito {
    constructor() {
        this.productos = []; // Lista de productos en el carrito
    }

    agregarProducto(producto) {
        this.productos.push(producto);
        this.mostrarCarrito();
    }

    quitarProducto(id) {
        this.productos = this.productos.filter(producto => producto.id !== id);
        this.mostrarCarrito();
    }

    calcularTotal() {
        return this.productos.reduce((total, producto) => total + producto.precio, 0).toFixed(2);
    }

    vaciarCarrito() {
        this.productos = [];
        this.mostrarCarrito();
    }

    mostrarCarrito() {
        const listaCarrito = document.getElementById('carrito-lista');
        listaCarrito.innerHTML = '';

        this.productos.forEach(producto => {
            const li = document.createElement('li');
            li.textContent = `${producto.nombre} (${producto.descripcion}) - $${producto.precio}`;
            li.onclick = () => this.quitarProducto(producto.id); // Quitar producto al hacer clic
            listaCarrito.appendChild(li);
        });

        document.getElementById('total').textContent = this.calcularTotal();
    }
}

// Crear productos con descripción e imagen
const producto1 = new Producto(1, 'Manzana', 'Fruta fresca y dulce', 0.5, 'manzana.jpg');
const producto2 = new Producto(2, 'Pan', 'Pan integral recién horneado', 1.0, 'pan.jpg');
const producto3 = new Producto(3, 'Leche', 'Leche entera', 1.5, 'leche.jpg');

// Crear una instancia del carrito
const carrito = new Carrito();

// Función para mostrar detalles del producto
function mostrarProducto(id) {
    const productos = [producto1, producto2, producto3];
    const producto = productos.find(p => p.id === id);
    if (producto) {
        document.getElementById('producto-nombre').textContent = producto.nombre;
        document.getElementById('producto-descripcion').textContent = producto.descripcion;
        document.getElementById('producto-precio').textContent = `Precio: $${producto.precio}`;
        document.getElementById('producto-imagen').src = producto.imagen;
    }
}

// Función para agregar productos al carrito
function agregarProducto(id) {
    const productos = [producto1, producto2, producto3];
    const producto = productos.find(p => p.id === id);
    if (producto) {
        carrito.agregarProducto(producto);
    }
}

// Función para vaciar el carrito
function vaciarCarrito() {
    carrito.vaciarCarrito();
}



