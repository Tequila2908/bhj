const signinForm = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const user = document.getElementById('user_id')
const signin = document.getElementById('signin');
const btn = signin.querySelector('.btn');
const input = document.querySelectorAll('input');




//localStorage.clear();
if (localStorage.id) {
	welcome.classList.add('welcome_active');
	user.textContent = localStorage.id;
} else {
	signin.classList.add('signin_active');
	btn.addEventListener('click', authorization);
}



function authorization(e) {
	e.preventDefault();
	let userData = new FormData(signinForm);
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');

	xhr.addEventListener('readystatechange', (e) => {
		if(e.target.readyState == xhr.DONE && e.target.status == 200) {
			let success = JSON.parse(e.target.responseText);
			console.log(success.success);
			if (success.success) {
				signin.classList.remove('signin_active');
				localStorage.id = success.user_id;
				console.log(localStorage);
				welcome.classList.add('welcome_active');
				user.textContent = success.user_id;
			} else {
				alert('Неверный логин/парол');
				input.forEach(el => el.value = '');
			}
		}
	})

	xhr.send(userData);
	
}
