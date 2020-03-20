const checkboxes = Array.from(document.getElementsByClassName('interests_active'));
console.log(checkboxes[0].closest('.interest').querySelector('.interest__check'));

function check (e) {
	console.log(e.target)
	if (e.target.checked) {
		let box = Array.from(e.target.closest('.interest').querySelectorAll('.interests_active .interest__check'));
		for (let i = 0; i < box.length; i++) {
			box[i].checked = true;
		} 
	}  if (!e.target.checked) {
		let box = Array.from(e.target.closest('.interest').querySelectorAll('.interests_active .interest__check'));
		for (let i = 0; i < box.length; i++) {
			box[i].checked = false;
		} 
	}
}

checkboxes.forEach(el => el.closest('.interest').querySelector('.interest__check').addEventListener('click', check));

