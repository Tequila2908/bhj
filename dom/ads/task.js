const rotatorCase = Array.from(document.getElementsByClassName('rotator__case'));


function rotator() {
		if (rotatorCase.indexOf(document.querySelector('.rotator__case_active')) === rotatorCase.length - 1) {
			rotatorCase[rotatorCase.length - 1].classList.remove('rotator__case_active');
			rotatorCase[0].classList.add('rotator__case_active');
		} else {
			let test = document.querySelector('.rotator__case_active');
			rotatorCase[(rotatorCase.indexOf(document.querySelector('.rotator__case_active'))) + 1].classList.add('rotator__case_active');
			test.classList.remove('rotator__case_active');
			console.log(rotatorCase.indexOf(document.querySelector('.rotator__case_active')));
		}
	
}

//rotator()

setInterval(rotator, 1000)
