let cart = [];
const cartCountElem = document.getElementById('cart-count');
const cartItemsHover = document.getElementById('cart-items-hover');
const hoverTotalPriceElem = document.getElementById('hover-total-price');
const cartIcon = document.querySelector('.cart-icon');

cartIcon.addEventListener('click', () => {
    cartIcon.classList.toggle('active');
});

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseInt(button.getAttribute('data-price'));

        cart.push({ name, price });

        updateCart();
    });
});

function deleteItem(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    cartCountElem.textContent = cart.length;
    cartItemsHover.innerHTML = '';
    let totalPrice = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price} Ft`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Törlés';
        deleteButton.classList.add('delete-item');
        deleteButton.addEventListener('click', () => deleteItem(index));

        li.appendChild(deleteButton);
        cartItemsHover.appendChild(li);

        totalPrice += item.price;
    });

    hoverTotalPriceElem.textContent = totalPrice;
}

document.getElementById('rolunkgomb').addEventListener('click', function() {
    window.location.href = 'rólunk.html';
});
document.getElementById('tudnivalokgomb').addEventListener('click', function() {
    window.location.href = 'tudnivalók.html';
});