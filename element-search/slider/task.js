const sliderItems = Array.from(document.getElementsByClassName('slider__item'));
const sliderDot = Array.from(document.getElementsByClassName('slider__dot'));
const sliderNext = document.querySelector('.slider__arrow_next');
const sliderPrev = document.querySelector('.slider__arrow_prev');
let slide = document.querySelector('.slider__item_active');
sliderNext.onclick = function () {
	for (let i = 0; i < sliderItems.length; i++) {
		
		if (slide == sliderItems[sliderItems.length - 1]) {
			slider(0)
			break;


		} else if (slide == sliderItems[i]) {
			slider(i + 1);
			break;
		}
	}
}

sliderPrev.onclick = function () {
	for (let i = sliderItems.length; i > 0; i--) {
		if (slide == sliderItems[0]) {
			slider(sliderItems.length - 1)
			break;


		} else if (slide == sliderItems[i]) {
			slider(i - 1);
			break;
		}
	}
}


function slider (item_number) {
	slide.classList.remove('slider__item_active');
	slide = sliderItems[item_number];
	slide.classList.add('slider__item_active');
}

