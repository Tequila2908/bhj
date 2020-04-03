const editor = document.getElementById('editor');
let text;
editor.textContent = localStorage.text




editor.addEventListener('keyup', () => {
	text = editor.value;
	localStorage.text = text;
	console.log(localStorage);
})