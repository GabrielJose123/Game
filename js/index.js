const person = document.getElementById("person");
const enemies = document.getElementById("enemie");
const moviEnemie = document.getElementById("enemie-movimentation");
const tiroMovimentation = document.getElementById("tiro-movimentation");
const musicBattle = document.getElementById("audio");

const limite = window.innerWidth - person.clientWidth;
let positionX = 0;
let podeAtirar = true;
const tempoRecarga = 300;

musicBattle.play();

function move() {
    person.style.left = positionX + window.innerWidth / 2 + "px";
}

function movePerson() {
    addEventListener('keydown', function(event) {
        if ((event.key === 'd' || event.key === 'D') && positionX < limite / 2) {
            positionX += 30;
        } else if ((event.key === 'a' || event.key === 'A') && positionX > -limite / 2) {
            positionX -= 30;
        }
        move();
    });
}
movePerson();

addEventListener('keydown', function(event) {
    if ((event.key === 'j' || event.key === 'J') && podeAtirar) {
        gerarTiro(positionX + window.innerWidth / 2);
        podeAtirar = false;
        setTimeout(() => {
            podeAtirar = true;
        }, tempoRecarga);
    }
});

function gerarTiro(positionX) {
    const novoTiro = document.createElement("div");
    novoTiro.classList.add("tiro");
    tiroMovimentation.appendChild(novoTiro);
    novoTiro.style.left = positionX + "px";
    novoTiro.style.bottom = "100px";
    novoTiro.style.top = "100px";
}

function removerTirosForaDaTela() {
    const tiros = document.querySelectorAll(".tiro");
    tiros.forEach((tiro) => {
        if (tiro.offsetTop < 0) {
            tiro.remove();
        }
    });
}
setInterval(removerTirosForaDaTela, 100);

function mostrarPosicaoAtualizada() {
    const tiros = document.querySelectorAll(".tiro");
    const positionYtiro = [];

    tiros.forEach((tiro) => {
        positionYtiro.push(tiro.offsetTop);
    });

    console.log(positionYtiro);
}

let positionY = mostrarPosicaoAtualizada()

setInterval(mostrarPosicaoAtualizada, 1000);

function criarInimigo() {
    const newEnemie = document.createElement("div");
    let spawnX = Math.floor(Math.random() * 1367);
    newEnemie.classList.add("enemies");
    moviEnemie.appendChild(newEnemie);
    newEnemie.style.left = spawnX + "px";
    newEnemie.style.top = "0px";
}

let PositionEnemie = [];

function showPositionEnemie() {
    const Enemies = document.querySelectorAll(".enemies");
    const PositionEnemie = [];
    
    Enemies.forEach((Enemies) => {
        PositionEnemie.push(Enemies.offsetTop);
    });

    console.log("posição do inimigo", PositionEnemie);

    return PositionEnemie;
}

setInterval(() => {
    showPositionEnemie();

    if (PositionEnemie.length > 2) {
        console.log("Mais de 2 inimigos, limpando array...");
        PositionEnemie.length = 0;
        console.log("Array após limpeza:", PositionEnemie);
    }
}, 1000);

let intervaloInimigos = setInterval(criarInimigo, 5000);

let speed = 5;
let tempoJogo = 0;

function increaseSpeed() {
    tempoJogo++;
    if (tempoJogo % 10 === 0) {
        speed -= 0.5;
        if (speed < 1) speed = 1;
        console.log(`Nova velocidade: ${speed}s`);
    }
}

function updateEnemySpeed() {
    const enemies = document.querySelectorAll(".enemies");

    enemies.forEach((enemy) => {
        enemy.style.animationDuration = `${speed}s`;
    });
}

function checkCollision() {
    const tiros = document.querySelectorAll(".tiro");
    const enemies = document.querySelectorAll(".enemies");

    tiros.forEach((tiro) => {
        enemies.forEach((enemy) => {
            const tiroRect = tiro.getBoundingClientRect();
            const enemyRect = enemy.getBoundingClientRect();

            if (tiroRect.top < enemyRect.bottom &&
                tiroRect.bottom > enemyRect.top &&
                tiroRect.left < enemyRect.right &&
                tiroRect.right > enemyRect.left) {
                enemy.remove();
                tiro.remove();
                console.log("Inimigo destruído!");
            }
        });
    });
}

setInterval(() => {
    increaseSpeed();
    updateEnemySpeed();
    checkCollision();
}, 1000);
