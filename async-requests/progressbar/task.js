const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', (e) => {
	
	const file = new FormData(form);
	const request = new XMLHttpRequest();
	request.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
	request.upload.addEventListener('progress', (e) => {
		progress.value = e.loaded/e.total;
		
	});
	request.send(file);
	e.preventDefault();

})

