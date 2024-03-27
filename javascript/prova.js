function hello() {console.log('cianeo');}
hello();

// dichiarazioni hoisted... come se le spostasse sopra e quindi anche se definisco dopo funziona


function onClick() {
    console.log("cliccato");
}

const button = document.querySelector("button")
button.addEventListener("click", onClick);



