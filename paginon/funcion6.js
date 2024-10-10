javascript
// scripts.js

let cart = [];

// Función para agregar productos al carrito
$(document).on('click', '.add-to-cart', function() {
    const title = $(this).data('title');
    const price = parseFloat($(this).data('price'));
    
    // Verificar si el producto ya está en el carrito
    const existingProduct = cart.find(item => item.title === title);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ title, price, quantity: 1 });
    }
    
    updateCart();
});

// Función para actualizar el carrito
function updateCart() {
    const cartItems = $('#cartItems');
    cartItems.empty(); // Limpiar el contenido anterior

    let totalQuantity = 0;
    let totalPrice = 0.00;

    // Agregar los productos al modal del carrito
    cart.forEach(item => {
        totalQuantity += item.quantity;
        totalPrice += item.price * item.quantity;

        cartItems.append(`
            <tr>
                <td>${item.title}</td>
                <td>${item.quantity}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td><button class="btn btn-danger remove-item" data-title="${item.title}">Eliminar</button></td>
            </tr>
        `);
    });

    $('#totalQuantity').text(totalQuantity);
    $('#totalPrice').text(totalPrice.toFixed(2));
}

// Función para eliminar un producto del carrito
$(document).on('click', '.remove-item', function() {
    const title = $(this).data('title');
    cart = cart.filter(item => item.title !== title);
    updateCart();
});

// Función para limpiar el carrito
$('#clearCart').click(function() {
    cart = [];
    updateCart();
});