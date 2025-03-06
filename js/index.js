const person = document.getElementById("person")
const enemies = document.getElementById("enemie")

const moviEnemie = document.getElementById("enemie-movimentation")

const limite = window.innerWidth - person.clientWidth

let positionX = 0

function move() {
    person.style.left = positionX + window.innerWidth / 2 + "px"

}

addEventListener('keydown', function(event) {
    if (event.key == 'd' && positionX < limite/2){
        positionX += 20;
    }
    else if (event.key == 'a' && positionX > -limite/2) {
        positionX -= 20;
    }
    move()
})



const enemieLimit = window.innerWidth - enemies.clientWidth

function criarInimigo() {
    let positionXenemie = Math.floor(Math.random() * 1367);
    const newEnemie =  document.createElement("div");
    newEnemie.classList.add("enemies")
    moviEnemie.appendChild(newEnemie)

    person.style.left = positionXenemie + "px"

}

setInterval(criarInimigo, 2000);
