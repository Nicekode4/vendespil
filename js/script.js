let dogs = [
    "assets/corgi.jpg",
    "assets/lonely-pug.jpg",
    "assets/shih-tzu.jpg",
    "assets/terrier.jpg",
    "assets/spaniel.jpg",
    "assets/golden.jpg",
]
let newDogs = []
const game = document.querySelector('#gameSec')
let count = 0;
let points = 0;
let compare = []
let time = 0;
let numberOfPairs = 4
let tries = 0
const triesH2 = document.querySelector('#tries')
let date = new Date(time * 1000);
let minutes = "0" + date.getMinutes();
let seconds = "0" + date.getSeconds();

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

console.log();

function makeBoard() {
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < numberOfPairs; index++) {
            const element = dogs[index];
            newDogs.push(element)
        }
    }
    shuffle(newDogs)
    newDogs.forEach(element => {
    game.innerHTML += `    
    <article id="${count += 1}">
    <div class="front bubbly-button"></div>
    <div class="back">Drik!</div>
    </article>`  
     
    });
    count = 0; 
    flip()
    console.log();
}
makeBoard()
timer()
function flip() {
    document.querySelectorAll('article').forEach(element => {
        element.addEventListener('click', function compareing(){
            randomNumber = Math.round(Math.random() * 2)
            compare.push(element.children[1])
            
            if (randomNumber < 1) {
                 setTimeout(() => {
            element.children[0].classList.toggle('back')
            element.children[1].classList.toggle('back2')
            element.children[1].style.pointerEvents = "none";
            element.style.pointerEvents = "none";
           }, 500);
            }else{
                element.children[1].style.pointerEvents = "none";
                element.style.pointerEvents = "none";  
            }
            
          
            
        
    });
    
}
)}


function point() {
    points += 1
    document.querySelector('#points').innerHTML = "Points: " + points
}
// Minutes part from the timestamp

function timer() {
    interval = setInterval(() => {
        minutes = "0" + date.getMinutes();
    seconds = "0" + date.getSeconds();
        date = new Date(time * 1000);
        time += 1
        document.querySelector('#time').innerHTML = "Tid: " + minutes.substr(-2) + " Min " + seconds.substr(-2) + " Sek";
    }, 1000);
}

function newGame() {
location.reload()

}