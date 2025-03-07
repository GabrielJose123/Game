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
        positionX += 30;
    }
    else if (event.key == 'a' && positionX > -limite/2) {
        positionX -= 30;
    }
    move()
})

const newEnemie = document.createElement("div");

function criarInimigo() {
    let SpawnEnemie = Math.floor(Math.random() * 1367)
    newEnemie.classList.add("enemies")
    moviEnemie.appendChild(newEnemie)
    newEnemie.style.left = SpawnEnemie + "px"
    console.log(SpawnEnemie)
    return SpawnEnemie
} 



let VariableMovimentation = setInterval(criarInimigo,3000)








