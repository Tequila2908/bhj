const dropdawnValue = document.querySelectorAll('.dropdown');
const dropdawnLink = document.querySelectorAll('.dropdown__link');



dropdawnValue.forEach(el => el.addEventListener('click', function () {
	let test = document.querySelectorAll('.dropdown__list_active')
	let list = el.closest('.dropdown').querySelector('.dropdown__list');
	list.classList.toggle('dropdown__list_active');
	if (test.length != 0 ) {
		test[0].classList.remove('dropdown__list_active');
	}


	dropdawnLink.forEach(element => element.addEventListener('click', function (event) {
		event.preventDefault();
		event.target.closest('.dropdown').querySelector('.dropdown__value').textContent = event.target.closest('.dropdown__item').textContent;
	}));

}));