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
    <div class="front"></div>
    <div class="back" style="background-image: url(${element});"></div>
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
            compare.push(element.children[1])
            console.log(compare[0]);
            element.children[0].classList.toggle('back')
            element.children[1].classList.toggle('back2')
            element.children[1].style.pointerEvents = "none";
            element.style.pointerEvents = "none";
            
            
            
            count += 1
            //obj.removeEventListener('click', compareing)
            
            if (count == 2) {
                
 
            if (compare[1].style.backgroundImage === compare[0].style.backgroundImage) {
                console.log(true);
                point() 
                for (let index = 0; index < 2; index++) {
                    const element = compare[index];
                    
                    element.parentElement.style.pointerEvents = "none";

                    
                    
                    
        
                } 
                           if (points === numberOfPairs) {
                alert("Du vandt!")
                clearInterval(interval)
            }
               
                compare = []
                count = 0
            }else{
                setTimeout(() => {
                                  console.log(false);
                compare.forEach(element => {
                    element.classList.toggle('back2')
                    element.parentElement.children[0].classList.toggle('back')
                    element.style.pointerEvents = "auto";
                    element.parentElement.style.pointerEvents = "auto";
                    
                });  
                compare = []
                count = 0
                }, 500);

            }
            tries += 1
            triesH2.innerHTML = "Træk: " + tries
        }
        })
        
    });
    
}



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
        document.querySelector('#time').innerHTML = "Tid: " + minutes.substr(-2) + " Min " + seconds.substr(-2) + " Sec";
    }, 1000);
}