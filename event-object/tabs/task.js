const tab = Array.from(document.getElementsByClassName('tab'));
const content = Array.from(document.getElementsByClassName('tab__content'));


tab.forEach(el => el.addEventListener('click', function (e) {
	let tabActive  = Array.from(document.getElementsByClassName('tab_active'));
	let contentActive = Array.from(document.getElementsByClassName('tab__content_active'));
	tabActive[0].classList.remove('tab_active');
	contentActive[0].classList.remove('tab__content_active');
	e.target.classList.add('tab_active');
	content[tab.indexOf(e.target)].classList.add('tab__content_active');
}))