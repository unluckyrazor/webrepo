const X_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/x.png';
const O_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/circle.png';


const freeBoxes = []
const boxes = document.querySelectorAll('#grid div')

for(const box of boxes){
    box.addEventListener('click', changeToX);
    freeBoxes.push(box);
}


function assignSpace(space, owner){
    const image=document.createElement('img');
    image.src=owner=== 'x' ? X_IMAGE_URL: O_IMAGE_URL;
    space.appendChild(image);
    
    const index = parseInt(space.dataset.index);
    takenBoxes [index] = owner;

    const idx_to_remove = freeBoxes.indexOf(space)
    freeBoxes.splice(idx_to_remove,1);

    space.removeEventListener('click', changeToX);

}


function changeToX(event){
    if (gameOver){
        displayWinner();
}
    console.log('Hello');
    
    assignSpace(event.currentTarget('x'))
}

function computerPlays(){
    console.log("prova");
    const index=Math.floor(Math.random() *freeBoxes.length)
    const freeSpace =freeBoxes[index]
    assignSpace(freeSpace, 'o');
}

function checkBoxes(one, two, three){
    if(takenBoxes[one] !== undefined && takenBoxes[one]===takenBoxes[two] && takenBoxes[two] === takenBoxes[three])
    {
        return takenBoxes[one]

    }
    return null
}

function getWinner() {

}

function displayWinner(){
    const winner= getWinner()
    const resultContainer = document.querySelector('#results')
    const result = document.createElement('h1')
    if (winner==='x'){
        result.textContent="Hai vinto"

    }else if (winner==='o'){
        result.textContent= "Hai perso"
    }else {
        result.textContent="pareggio"

    }
    for(const box of freeBoxes){
        box.removeEventListener('click', changeToX);
    }

    resultContainer.appendChild(result);
}

function gameOver(){
    return freeBoxes.length=== 0 || getWinner() !== null;
}
