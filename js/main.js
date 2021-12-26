const audio = new Audio("src/music.mp3");
const minutes = document.getElementById("minutes");
const second = document.getElementById("seconds");
const volumen = document.getElementById("volumen");
const line_time = document.getElementById("line-time");

// Play
document.getElementById("play").addEventListener("click", play, false);

function play() {

    audio.play();

    document.getElementById("play").style.display="none";
    document.getElementById("pause").style.display = "inline";

    let min = 0;

    setInterval(() => {

        let second_now = Math.round(audio.currentTime);
        line_time.value = second_now;

         if (second_now <= 59) {

             min = 0;

         }

        if (second_now >= 120) {

            second_now -= 120;
            min = 2;

        }

        if (second_now >= 60 && second_now <= 119) {

            second_now -= 60;
            min = 1;

        }

        if (second_now <= 9) {

            second_now = '0' + second_now;

        }

        second.innerHTML = second_now;
        minutes.innerHTML = min;

    }, 1000);

}

// Pause
document.getElementById("pause").addEventListener("click", pause, false);

function pause() {

    audio.pause();

    document.getElementById("play").style.display = "inline";
    document.getElementById("pause").style.display = "none";
}

volumen.addEventListener("mousemove", () => {

    audio.volume = volumen.value / 100;

    if (volumen.value <= 50 && volumen.value >= 1) {

        document.getElementById("vol").className = ("fas fa-volume-down");

    } else if (volumen.value == 0) {

        document.getElementById("vol").className = ("fas fa-volume-mute");

    } else {

        document.getElementById("vol").className = ("fas fa-volume-up");

    }

});

line_time.addEventListener("mouseup", () => {

    audio.currentTime = line_time.value;

});