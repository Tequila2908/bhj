const loader = document.getElementById('loader');
const item = document.getElementById('items');
let xhr = new XMLHttpRequest();
console.log(2)

xhr.open('GET', ' https://netology-slow-rest.herokuapp.com');

xhr.onreadystatechange = function() {
	console.log(xhr.readyState);
	if (xhr.readyState == 4) {
		let data = JSON.parse(this.responseText);
		loader.classList.remove('loader_active');
		for (let key in data.response.Valute) {
			item.innerHTML += `
			 <div class="item">
				<div class="item__code">
				    ${data.response.Valute[key].CharCode}
				</div>
				<div class="item__value">
				    ${data.response.Valute[key].Value}
				</div>
				<div class="item__currency">
				    руб.
				</div>
			</div>`
		}
	}
}

xhr.send();


