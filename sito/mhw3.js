function onHover() {
    
    console.log("hoverato");
    const article = document.querySelector("#flex_item_article_middle");
    
    //prende la data segnata nell'articolo e la appende all'articolo

    
    console.log("hoverato");
    
    flex_item_article_middle.appendChild(date);
    date.textContent=article.dataset.date;
    header_middle.removeEventListener("mouseover", onHover);
   


}

function onLeave(){
    // quando tolgo il mouse sparisce la data 
    date.remove();
    header_middle.addEventListener("mouseover", onHover);


}

function cambiaMidImage() {
    console.log("cliccato");
    midImage.src="imgs/mario.png";
}

function Mostra() {
    const cont_middle = document.querySelector('.middle-flex-cont'); 
    console.log("mostrando");
    cont_middle.classList.add('flex')
    const item_middle = document.querySelectorAll('.mid_flex_article'); 
    
    for (let i of item_middle) {
    console.log("mostrando");
    i.classList.add('block');
    }

    button_altro.remove();

    // poi questo dovrebbe caricare un tot di articoli 
}


function favItem() { 
    star_fav.classList.add('fav');  
}

function provaAccedi(){
    flex_item_article_middle.remove();
    const accedi = document.createElement('input');
    flex_container_middle.appendChild(accedi);
    button_altro.remove();
    bottone.remove();
}

// pulsante che mostra altri articoi
const button_altro = document.querySelector("#mostra-altro")
button_altro.addEventListener("click", Mostra);




//questa è una prova di ascoltare il mouse che va sopra ad una immagine e cambiava l'immagine l'ho tolto
//const mid_image_container = document.querySelector(".mid_image_container");
// mid_image_container.addEventListener("mouseover", onHover);

// voglio una arrow in overlay sul'articolo principlae che mi cambia immagine 
// e testo al massimo . 
const arrow_button = document.querySelector(".arrow");
const midImage = document.querySelector(".big_article_image_middle")
arrow_button.addEventListener("click", cambiaMidImage);;

//pulsante preferito cambia colore quando lo clicco

const star_fav = document.querySelector(".star");
star_fav.addEventListener("click", favItem);

// mettera delle caselle di testo 
const bottone =  document.querySelector(".accedi");
bottone.addEventListener("click", provaAccedi)

//hover su titolo dell'articolo mid e spunta la data passata come data-* in html
// quando tolgo il mouse toglie la data

const date = document.createElement('span');
date.classList="data";
const header_middle= document.querySelector(".middle_article_header");

header_middle.addEventListener("mouseover", onHover);
header_middle.addEventListener("mouseleave", onLeave);


/* Mini-homework 2

usare document.createElement() per creare dinamicamente oggetti HTML a partire da contenuti definiti in JavaScript; ok 
modificare dinamicamente l’URL di un’immagine tramite l’attributo src; ok
modificare dinamicamente la classe degli elementi agendo sulla proprietà classList; ok
mostrare o nascondere dinamicamente parti della pagina assegnando o rimuovendo classi CSS che modificano la proprietà display; ok
utilizzare attributi data-*. ok




Alcuni esempi di funzionalità che potete aggiungere sono le seguenti:

pulsante “leggi di più”, che mostra o nasconde dinamicamente alcuni elementi;
cambiare una o più immagini della pagina quando l’utente clicca o si muove sopra certi elementi;
aggiungere una classe “preferito” (con conseguenti modifiche estetiche definite in CSS) quando l’utente clicca su certi elementi della pagina;
conservare informazioni negli attributi data-*, da usare per mostrare dati aggiuntivi quando l’utente clicca o si muove sopra certi elementi.
*/



/* prova api

chiamata api rest igdb 

const client_id= '4xc9gc11f5vtpv15695cb46blzrf3k';
const client_secret = 'dcxht65j1e3t9cq1xuwsft71l310eh'
let token='';

function onTokenResponse(response){
    console.log("token ritornato");
    if (!response.ok) {
        console.log("errore dentro")
        
    }
    return response.json();
    
    
}

function onTokenJson(json){
    console.log("json tornato");
    console.log(json);
    if (!json) {
        console.log("errore json non funziona\n")
    }
    token=json.access_token;
    console.log(token);
    
}

function onErrorResponse(failure) {
    console.log("fallito")
}

function onResponse(response) {
    console.log("response ritornato 2")
    if(!response.ok) {
        console.log("errore non ok")
    }
    return response.json();
}
function onJson(json){
    console.log("json ritornato 2")
    console.log(json);
}
function onError(error) {
    console.log(error);
    console.log("errore");
}

fetch("https://id.twitch.tv/oauth2/token", {
    method: "post",
    body: "client_id=4xc9gc11f5vtpv15695cb46blzrf3k&client_secret=dcxht65j1e3t9cq1xuwsft71l310eh&grant_type=client_credentials",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
 }
 }).then(onTokenResponse, onErrorResponse).then(onTokenJson);



fetch("https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games", {
    method: "post",
    
    body: "fields *;",
    headers: {
        "Client-ID": client_id,
        "Authorization": "Bearer" + token
 }
 }).then(onResponse, onError).then(onJson);
*/

 //non posso farlo perche mi da corse error e dovrei fare richieste dal server o da  un proxy icsdi
 


 // prova api spotify 
 const spotify_client_id='5510ef73fb5348c8b8dec19039f1dc9d';
 const spotify_client_secret='2b9a114862484c86bc8fb75c8406fb52';


 let token_spotify='';
 let album_value='League'
 let spoty_content;
  
 

function onTokenResponse(response){
    console.log("token response ritornato");
    if (!response.ok) {
        console.log("errore dentro")
        
    }
    return response.json();
    
    
}
function onTokenJson(json){
    console.log("json token tornato");
    
    if (!json) {
        console.log("errore json non funziona\n")
    }
    token_spotify=json.access_token;
    
    
    prendi();
    
    
}
function onResponse(response){
    console.log("response contenuto tornato");
    return response.json();
    
}
function onJson(json){
    console.log("json contenuto tornato");
    
    
    return json;
}


function selectTracks(playlist) {
    const selectedTracks = playlist.items.slice(0, 5); // prende le prime 5
    console.log('Selected tracks:', selectedTracks);

    const tracklist= document.querySelectorAll(".track_name");
    const tracklinklist=document.querySelectorAll(".spoty_track_link");
    const trackimageList = document.querySelectorAll(".spoty_track_image");
    

    let i=0;
        
    for (let trackObj of selectedTracks) {
        
        
        console.log(selectedTracks[i])
        let trackLink = trackObj.track.external_urls.spotify;
        let trackName = trackObj.track.name;
        let trackImage = trackObj.track.album.images[1].url;
        console.log("track name", trackName);
        
        
        trackimageh=trackimageList[i];
        track=tracklist[i];
        tracklinkh=tracklinklist[i];
        

        trackimageh.src=trackImage;
        track.textContent=trackName;
        tracklinkh.href=trackLink;
        
        i++;
        
        }
    
    
    }
        
    

function HandlePlaylist(playlists) {
    // sceglie la playlist 0
    console.log(playlists.playlists)
    
    if (!playlists.playlists || !playlists.playlists.items || playlists.playlists.items.length === 0) {
        console.error('non ho trovato  playlist');
        return;
    }

    const playlistId = playlists.playlists.items[0].id;
    // fetcha tracce
    fetch('https://api.spotify.com/v1/playlists/'+ playlistId + '/tracks', {
        headers: {
            "Authorization": "Bearer " + token_spotify
        }
    })
    .then(response => response.json())
    .then(selectTracks)
    ; 
}


// ritorna il contenuto che mi interessa
function prendi() { fetch("https://api.spotify.com/v1/browse/categories/gaming/playlists" ,
{
    headers:{
        "Authorization": "Bearer " + token_spotify
    }
}).then(onResponse).then(onJson).then(HandlePlaylist); }

// fetcha il token che mi serve
fetch("https://accounts.spotify.com/api/token", {
    method: "post",
    body: "grant_type=client_credentials",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Basic " + btoa(spotify_client_id + ":" + spotify_client_secret)
 }
 }).then(onTokenResponse).then(onTokenJson);

//  scrivere il codice che cambia src delle immagini della top, cambia il titolo della canzone, e cambia il link
// fatto

// sistemare il codice
//altra api 
// potrei integratre una preview della traccia s eho tempo . anzi meglio cambiare come sceglie la traccia. idealmente una ost 
// ma devo fare che ne prende una a caso di ogni ost 