let dogs = [
    "assets/corgi.jpg",
    "assets/lonely-pug.jpg",
    "assets/shih-tzu.jpg",
    "assets/terrier.jpg",
]
let newDogs = []
const game = document.querySelector('#gameSec')
const gameChildren = document.querySelector('#gameSec').children
let count = 0;
let points = 0;
let compare = []
let ids = []
let time = 0;
let date = new Date(time * 1000);
let minutes = "0" + date.getMinutes();
let seconds = "0" + date.getSeconds();
game.disabled = true;
function makeBoard() {
    dogs.forEach(element => {
        newDogs.push(element)
        newDogs.push(element)
    });
    newDogs.forEach(element => {
    game.innerHTML += `    
    <article id="${count += 1}">
    <div class="front">Front</div>
    <div class="back" style="background-image: url(${element});">Back</div>
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
        element.addEventListener('click', function compareing(obj){
            compare.push(element.children[1])
            console.log(compare[0]);
            element.children[0].classList.toggle('back')
            element.children[1].classList.toggle('back2')
            
            
            count += 1
            //obj.removeEventListener('click', compareing)
            
            if (count == 3) {
                
                
                
            if (compare[1].style.backgroundImage === compare[0].style.backgroundImage) {
                console.log(true);
                point() 
                for (let index = 0; index < 2; index++) {
                    const element = compare[index];
                    
                    element.parentElement.style.pointerEvents = "none";

                    
                    
                    
        
                }
            
            }else{
                console.log(false);
                compare.forEach(element => {
                    element.classList.toggle('back2')
                    element.parentElement.children[0].classList.toggle('back')
                    element.parentElement.style.pointerEvents = "auto";
                    
                });
            }
                compare = []
                count = 0
        }
        })
        
    });
    
}



function point() {
    points += 1
    document.querySelector('#points').innerHTML = "Points: " + points
}
point()
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