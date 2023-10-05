const boxBoy = document.getElementById('box-boy');
const dolphin = document.getElementById('dolphin');
const pepsi = document.getElementById('pepsi');
const levelElement = document.getElementById('level');

let level = 1;

function updateLevel() {
    level++;
    levelElement.textContent = level;
}

function moveObstacles() {
    const randomPosition = Math.floor(Math.random() * 80);
    dolphin.style.left = randomPosition + 'vw';
    pepsi.style.left = (randomPosition + 20) + 'vw';
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' && level < 20) {
        boxBoy.style.left = '50vw';
        setTimeout(() => {
            boxBoy.style.left = '0';
            updateLevel();
            moveObstacles();
        }, 1000);
    } else if (event.key === 'ArrowRight' && level === 20) {
        boxBoy.style.left = '50vw';
        setTimeout(() => {
            boxBoy.style.background = 'url("bola_celestial.png")';
            boxBoy.style.backgroundSize = 'cover';
        }, 1000);
    }
});

moveObstacles();