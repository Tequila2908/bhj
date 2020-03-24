
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

const checkWin = function () {
    if(dead.textContent == 10) {
        alert('You win');
        dead.textContent = 0;
        lost.textContent = 0;
    }

    if (lost.textContent == 5) {
        alert('You lose');
        dead.textContent = 0;
        lost.textContent = 0;
    }
}

for (i = 1; i < 10; i++) {
    let target = document.getElementById('hole' + i);
    target.onclick = function () {
        if (target.className.includes("hole_has-mole")) {
            dead.textContent++;
            checkWin();
        } else {
            lost.textContent++
            checkWin();
        }
    }
}