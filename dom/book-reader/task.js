const fontSizeButtons = Array.from(document.getElementsByClassName('font-size'));
const book = document.getElementById('book');


fontSizeButtons.forEach(el => addEventListener('click', (e) => {
	e.preventDefault();
	let reset = Array.from(document.getElementsByClassName('font-size_active'));
	reset[0].classList.remove('font-size_active');
	e.target.classList.add('font-size_active');
	let size = e.target.dataset.size;
	let sizeClass = `book_fs-${size}`;
	if (size === undefined) {
		book.className = 'book';
	} else {
		book.className = `book ${sizeClass}`;
	}
}))