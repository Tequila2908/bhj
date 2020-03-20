const sideChat = Array.from(document.getElementsByClassName('chat-widget__side'));
const input = Array.from(document.getElementsByClassName('chat-widget__input'));
const chat = Array.from(document.getElementsByClassName('chat-widget__messages-container'));
const bot = [
	'Ты что уснул?',
	'Очнись',
	'Может просто закроешь страницу?',
	'Проснись',
	'Помоги себе сам',
	'Отвали',
	'Тупой кожаный мешок',
	'У меня перерыв',
	'Ненавижу тебя'];
const messages = document.querySelector( '.chat-widget__messages' );
let noActiveNow = 0;

setInterval (() => {
	let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    hours < 10 ? (hours = '0' + hours) : (hours = hours);
    minutes < 10 ? (minutes = '0' + minutes) : (minutes = minutes);
    time = `${hours} : ${minutes}`;
    return time;
}, 1000);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let index = Math.floor(Math.random() * (max - min)) + min;
  return index;
}
sideChat[0].addEventListener('click', () => {
	sideChat[0].closest('.chat-widget').classList.add('chat-widget_active');	
	setInterval(() => {
		noActiveNow++;
		if (noActiveNow % 30 == 0) {
			messages.innerHTML += `
           		<div class="message">
                	<div class="message__time">${time}</div>
                	<div class="message__text">${bot[getRandomInt(0, 4)]}</div>
            	</div>`;
            chat[0].scrollTop = chat[0].scrollHeight;
		}
	}, 1000);
})

input[0].addEventListener('keypress', (e) => {
	if(e.key == 'Enter' && input[0].value != '') {
		noActiveNow = 0;
		messages.innerHTML+= `
		<div class="message message_client">
            <div class="message__time">${time}</div>
            <div class="message__text">${input[0].value}</div>
        </div>`;
        setTimeout(() => {
        	messages.innerHTML += `
           		<div class="message">
                	<div class="message__time">${time}</div>
                	<div class="message__text">${bot[getRandomInt(4, bot.length)]}</div>
            	</div>`;
            chat[0].scrollTop = chat[0].scrollHeight;
        }, 1000);
		input[0].value = '';
		chat[0].scrollTop = chat[0].scrollHeight;
	}
})