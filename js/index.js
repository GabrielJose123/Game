const person = document.getElementById("person")
const enemies = document.getElementById("enemie")

const moviEnemie = document.getElementById("enemie-movimentation")

const tiroMovimentation = document.getElementById("tiro-movimentation")
const limite = window.innerWidth - person.clientWidth

let positionX = 0



let inimigos = [];

const musicBattle = document.getElementById("audio")

musicBattle.play()

function move() {
    person.style.left = positionX + window.innerWidth / 2 + "px"

}

function movePerson() {
    addEventListener('keydown', function(event) {
        if (event.key == 'd' && positionX < limite/2 || event.key == 'D' && positionX < limite/2){
            positionX += 30;
        }
        else if (event.key == 'a' && positionX > -limite/2 || event.key == 'A' && positionX > -limite/2)  {
            positionX -= 30;
        }
       
        move()
        
    })
    return positionX
}
movePerson()

addEventListener('keydown', function(event) {
    if (event.key == 'j' || event.key == 'J'  ) {
        gerarTiro(positionX + window.innerWidth / 2)
    }
   
    
});

let positionYtiro = []

function MostrarPosiçaoAtualizada() {
    const tiros = document.querySelectorAll(".tiro");
    
   
   

    if (positionYtiro.length > 10) {
        positionYtiro.splice(0, positionYtiro.length);
    }else {
        tiros.forEach((tiro) => {
            positionYtiro.push(tiro.offsetTop)
        });
    }
    

    console.log(positionYtiro)

    
}   

setInterval(MostrarPosiçaoAtualizada, 1);

function gerarTiro(positionX) {
    

     // Definindo onde o tiro vai surgir (altura)
    if (document.querySelectorAll(".tiro").length > 10 ) {
        console.log("tem 10")
    }else {
        const novoTiro = document.createElement("div")  // Criar um novo tiro
        novoTiro.classList.add("tiro");
        tiroMovimentation.appendChild(novoTiro);
        novoTiro.style.left = positionX + "px"; 
        novoTiro.style.bottom = "100px"; 
        novoTiro.style.top = "100px"; 
    }

   
    
// Percorrer a lista e exibir cada tiro
   
    
}

const newEnemie = document.createElement("div");

function criarInimigo() {
    let SpawnEnemie = Math.floor(Math.random() * 1367)
    newEnemie.classList.add("enemies")
    moviEnemie.appendChild(newEnemie)
    newEnemie.style.left = SpawnEnemie + "px"
   /* console.log(SpawnEnemie) */
    return SpawnEnemie
} 




let VariableMovimentation = setInterval(criarInimigo,5000)



function KillEnemie(inimigo) {

    const tiros = document.querySelectorAll(".tiro");

    const inimgo = document.querySelectorAll(".enemies")

    tiros.forEach((tiro) => {
        if (tiro.offsetTop < 0) {
            tiro.remove()
        }
    })

}












