function onHover() {
    console.log("cliccato");
    const article_image=document.querySelector('.article_image_middle')
    
    article_image.src="imgs/mario.png";


}


function Mostra() {
    const cont_middle = document.querySelector('.middle-flex-cont'); 
    console.log("mostrando");
    cont_middle.style.display = 'flex';
    const item_middle = document.querySelectorAll('.mid_flex_article'); 
    
    for (let i of item_middle) {
    console.log("mostrando");
    i.style.display = 'block'; 
    }

    button_altro.remove();

    // poi questo dovrebbe caricare un tot di articoli 
}

const button_altro = document.querySelector("#mostra-altro")
button_altro.addEventListener("click", Mostra);


// voglio una arrow in overlay sul'articolo principlae che mi cambia immagine 
// e testo al massimo . 

// zoom immagini quando hovero.
// prova hovver 
// hover on image makes grey filter too

const image_link = document.querySelectorAll(".img_link");

for(let i of image_link) {
    i.addEventListener("mouseover", onHover);
}




// bottone mostra immagini  







// mostra altri quando scorro(? clicco)
// modificare img source quando hover

// create element in qualche maniera 
// pulsante freccia che cambia articolo o img
// tasto mi piace sull'articolo che cambia icona una volta premuto 
// atributi data -*



/* Mini-homework 2

usare document.createElement() per creare dinamicamente oggetti HTML a partire da contenuti definiti in JavaScript;
modificare dinamicamente l’URL di un’immagine tramite l’attributo src;
modificare dinamicamente la classe degli elementi agendo sulla proprietà classList;
mostrare o nascondere dinamicamente parti della pagina assegnando o rimuovendo classi CSS che modificano la proprietà display;
utilizzare attributi data-*.




Alcuni esempi di funzionalità che potete aggiungere sono le seguenti:

pulsante “leggi di più”, che mostra o nasconde dinamicamente alcuni elementi;
cambiare una o più immagini della pagina quando l’utente clicca o si muove sopra certi elementi;
aggiungere una classe “preferito” (con conseguenti modifiche estetiche definite in CSS) quando l’utente clicca su certi elementi della pagina;
conservare informazioni negli attributi data-*, da usare per mostrare dati aggiuntivi quando l’utente clicca o si muove sopra certi elementi.
*/