let dogs = [
    "assets/corgi.jpg",
    "assets/lonely-pug.jpg",
    "assets/shih-tzu.jpg",
    "assets/terrier.jpg",
]
const game = document.querySelector('#gameSec')
const gameChildren = document.querySelector('#gameSec').children
let count = 0;
let points = 0;
let compare = []
let ids = []
let time = 0;

dogs.forEach(element => {
    dogs.push(element)
});

function MakeBoard() {
    document.querySelector('#points').innerHTML = "Points: " + points
    for (let index = 0; index < dogs.length; index++) {
game.innerHTML += `<article id="${index}">
<div class="front">front</div>
<div class="back" style="background-image: url(${dogs[index]})">back</div>
</article>`    
    
}
}
MakeBoard()

console.log(gameChildren[0]);
timer()
for (let index = 0; index < gameChildren.length; index++) {
    const element = gameChildren[index];
    
    element.addEventListener('click', function () {
        
        ids.push(element.id)
        if (ids[0] === ids[1]) {
            compare = []
            ids = []
            count = 0
        }else{
                   compare.push(element.children[1].style.backgroundImage)
        if (count === 2) {
            if (compare[0] == compare[1]) {
                console.log(true);

for (let index = 0; index < ids.length; index++) {
    document.querySelector(`[id='${ids[index]}']`).innerHTML = `<img src="${document.querySelector(`[id='${ids[index]}']`).children[0].style.backgroundImage}" alt="dog">`

}
points += 1
console.log(element);
document.querySelector('#points').innerHTML = "Points: " + points;
if (points == dogs.length/2) {
   alert("You won") 
   clearInterval(interval)
}
            }
            compare = []
            ids = []
            count = 0
            for (let index = 0; index < gameChildren.length; index++) {
                const element = gameChildren[index];
                element.firstElementChild.style.display = "block"
                element.lastElementChild.style.display = "none"
                
            }

        }else{
            count += 1
            
                              if (element.lastElementChild.style.display == "block") {
            element.firstElementChild.style.display = "block"
            element.lastElementChild.style.display = "none"
        }else{
                  element.firstElementChild.style.display = "none"
      element.lastElementChild.style.display = "block"
        }  
        }
        }



    })
}

function timer() {
    interval = setInterval(() => {
        time += 1
        document.querySelector('#time').innerHTML = "Tid: " + time
    }, 1000);
}