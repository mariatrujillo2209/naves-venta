let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    updateCartCount();
}

function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = cart.length;
}
