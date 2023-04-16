//Global Variables
//The song currently being played
var currentSong;

//Toggle Mute and Play Arrow

//Hide the Play Arrows, a helper function for when muting/unmuting
function hidePlayArrows() {
    Array.from(document.getElementsByClassName("playArrow")).forEach(arrow => {
        arrow.style.visibility = "hidden"
    });
}
function UnmuteAll() { //Triggers on the unmute button being pressed
    let audio = document.querySelectorAll("audio");
    audio.forEach(song => song.muted = false);
    soundOn = true;
    Array.from(document.getElementsByClassName("playArrow")).forEach(arrow => arrow.style.visibility = "visible");
}
function MuteAll() { //Triggers on the mute button being pressed
    let audio = document.querySelectorAll("audio");
    audio.forEach(song => song.muted = true);
    soundOn = false;
    hidePlayArrows();
}
hidePlayArrows();
MuteAll();

//Toggle Mute Button
var isMuted = true;
function toggleMute() {
    let text = document.querySelector("#mute span");
    let soundImg = document.querySelector("#mute img");
    if (isMuted) { //unmutes
        text.innerHTML = "Sound On";
        UnmuteAll();
        soundImg.src = "/volume-medium.svg";
    }
    else { //mutes
        text.innerHTML = "Sound Off";
        MuteAll();
        soundImg.src = "/volume-mute.svg";
        if (currentSong) {
            currentSong.pause();
            currentSong.currentTime = 0;
            currentSong = null;
        }
    }
    isMuted = !isMuted;
}
document.getElementsByClassName("btn")[0].addEventListener("click", toggleMute);


//Add Sound on Hover and play music permanently if the Play Button is clicked
var buttons = document.getElementsByClassName("glossary")[0].getElementsByTagName('li');
Array.from(buttons).forEach(button => {
    let song = button.getElementsByTagName("audio")[0]
    let arrow = button.getElementsByClassName("playArrow")[0];
    
    //mouse enters tile
    button.addEventListener("mouseenter", function(){
        if (!isMuted && !currentSong) {
            song.currentTime = 0;
            song.play();
        }
        arrow.style.opacity = "100%";
    })

    //mouse leaves tile
    button.addEventListener("mouseleave", function() {
        if (!isMuted && !currentSong) {
            song.pause();
            song.currentTime = 0;
        }
        if (arrow.src.indexOf("/play-arrow.svg") != -1) {
            arrow.style.opacity = "0";
        }
    })

    //Makes Play Arrow clickable
    arrow.addEventListener("click", function(event) {
        event.preventDefault();
        if (currentSong) {
            currentSong.currentTime = 0;
            currentSong.pause();
        }
        if (currentSong === song) {
            //arrow.style.opacity="0%";
            arrow.src = "/play-arrow.svg";
            arrow.parentElement
            currentSong = null;
        }
        else {
            Array.from(document.getElementsByClassName("playArrow")).forEach(arr => {
                arr.style.opacity = "0%";
                arr.src="/play-arrow.svg";
            })
            arrow.src = "/pause_icon.svg";
            arrow.style.opacity = "100%";
            currentSong = song;
            song.play();
        }
    })
})