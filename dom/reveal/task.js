const orangeBlock = Array.from(document.getElementsByClassName('reveal'));

//console.log(orangeBlock[0].getBoundingClientRect())

console.log(window.innerHeight);

document.addEventListener('scroll', function() {
	for (let i = 0; i < orangeBlock.length; i++) {
		if (orangeBlock[i].getBoundingClientRect().top < window.innerHeight) {
			orangeBlock[i].classList.add('reveal_active')
		}

		if (orangeBlock[i].getBoundingClientRect().bottom < 100) {
			orangeBlock[i].classList.remove('reveal_active')
		}
	}
	
});

