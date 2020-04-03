const modal = document.getElementById('subscribe-modal');
const modalClose = modal.querySelector('.modal__close');
//console.log(document.cookie);
//document.cookie = 'modal=; Expires=Thu, 01 Jan 1970 00:00:00 GMT';

function close() {
	modal.classList.remove('modal_active');
	document.cookie = 'modal=1';
}


function getCookie(name) {
	const value = "; " + document.cookie;
	let parts = value.split("; " + name + "=");
	if (parts.length === 2) {
		return parts.pop();
	}
}

if (getCookie('modal') != 1) {
	modal.classList.add('modal_active')
}


modalClose.addEventListener('click', close);

