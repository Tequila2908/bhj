const id = [];
const control = Array.from(document.getElementsByClassName('product__quantity-control'));
const add = Array.from(document.getElementsByClassName('product__add'));
const product = Array.from(document.getElementsByClassName('product'));
const cart = Array.from(document.getElementsByClassName('cart__products'));

function addProduct(e) {
	let cartProducts = Array.from(cart[0].getElementsByClassName('cart__product'));
	let count = Number(e.target.closest('.product').querySelector('.product__quantity-value').textContent);
	let productId = e.target.closest('.product').dataset.id;
	let productImage = e.target.closest('.product').querySelector('.product__image').getAttribute('src');
	let cartProduct = `
	<div class="cart__product" data-id="${productId}">
    	<img class="cart__product-image" src="${productImage}">
    	<div class="cart__product-count">${count}</div>
	</div>`;
	if (id.includes(productId)) {
		for (let i = 0; i < cartProducts.length; i++) {

			if (cartProducts[i].dataset.id == productId) {

				console.log(1)
				let cartCount = Number(cartProducts[i].querySelector('.cart__product-count').textContent);
				count = count + cartCount;
				cartProducts[i].querySelector('.cart__product-count').textContent = count;
				
			}
		}
	} else {
		id.push(productId);
		cart[0].innerHTML += cartProduct;
	}

	e.target.closest('.product').querySelector('.product__quantity-value').textContent = 1;
}



function countControl (e) {
	let num = Number(e.target.closest('.product__quantity-controls').querySelector('.product__quantity-value').textContent);
	if (e.target.classList.contains('product__quantity-control_dec')) {
		if (e.target.closest('.product__quantity-controls').querySelector('.product__quantity-value').textContent == 1) {
			e.target.closest('.product__quantity-controls').querySelector('.product__quantity-value').textContent = 1;	
		} else {
			e.target.closest('.product__quantity-controls').querySelector('.product__quantity-value').textContent = num - 1;
		}
	} else {
		e.target.closest('.product__quantity-controls').querySelector('.product__quantity-value').textContent = num + 1;
	}
}

control.forEach(el => el.addEventListener('click', countControl));
add.forEach(el => el.addEventListener('click', addProduct));