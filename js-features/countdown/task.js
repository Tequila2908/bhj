const countdown = function () {
	const time = document.getElementById('timer');
	time.textContent--;
	if (time.textContent == 0) {
		alert('You win');
		clearInterval(timer)
	}
}

const timer = setInterval(countdown, 1000)