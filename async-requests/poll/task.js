const poll = document.getElementById('poll__title');
const pollAnswer = document.getElementById('poll__answers');
const request = new XMLHttpRequest();
let allAnswer = 0;
request.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
request.addEventListener('readystatechange', (e) => {
	if (e.target.readyState == 4) {
		let data = JSON.parse(e.target.responseText);
		console.log(data.id);
		let titleText = data.data.title;
		poll.textContent = titleText;
		for (let i = 0; i < data.data.answers.length; i++) {
			let answer = document.createElement('button');
			answer.classList.add('poll__answer');
			answer.addEventListener('click', () => {
				alert(`Спасибо, ваш голос (${data.data.answers[i]}) засчитан!`);
				let post = `vote=${data.id}&answer=${i}`;
				const test = new XMLHttpRequest();
				test.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
				test.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
				test.addEventListener('readystatechange', (e) => {
					console.log(e.target.readyState);
					if (e.target.readyState == test.DONE && e.target.status == 200) {
						
						let test2 = JSON.parse(e.target.responseText);
						console.log(test2.stat);
						for (let key in test2.stat) {
							allAnswer += test2.stat[key].votes;
						}
						for (let key in test2.stat) {
							let num = test2.stat[key].votes/(allAnswer/100);
							console.log(num.toFixed(2))	
							poll.innerHTML += `<p>${test2.stat[key].answer}: <b>${num.toFixed(2)}%</b></p>`	
						}
						answers.forEach(el => el.remove());
					}
				})
				test.send(post);
			})
			answer.textContent = data.data.answers[i];
			pollAnswer.appendChild(answer);
		}
		let answers  = Array.from(document.getElementsByClassName('poll__answer'));
	}
})
request.send();