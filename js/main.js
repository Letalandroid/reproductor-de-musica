document.getElementById("play").addEventListener("click", play, false);
let audio = new Audio("src/music.mp3");

function play() {    
    
    audio.play();

    document.getElementById("play").style.display="none";
    document.getElementById("pause").style.display = "inline";

}


document.getElementById("pause").addEventListener("click", pause, false);

function pause() {

    audio.pause();

    document.getElementById("play").style.display = "inline";
    document.getElementById("pause").style.display = "none";
}