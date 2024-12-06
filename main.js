let mins;
let secs;
let timer = false;
let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");
let resetButton = document.getElementById("resetButton");

const audio = new Audio('path/to/your/sound.mp3');

function timerOn() {
    timer = true

    buttonToggle(startButton);
    buttonToggle(stopButton);
}

function timerOff() {
    timer = false;

    buttonToggle(startButton);
    buttonToggle(stopButton);
}

function pressPlay() {

    let minset = document.getElementById("minutes").value;
    let secset = document.getElementById("seconds").value;

    mins = parseFloat(minset);
    secs = ((mins * 60) + parseFloat(secset));

    timerOn();
}

function Decrement() {

    if (timer == true) {

        let seconds = document.getElementById("seconds");
        let minutes = document.getElementById("minutes");

        if (secs < 59) {
            seconds.value = secs;
        }
        else {
            minutes.value = getminutes();
            seconds.value = getseconds();
        }
        if (mins < 1) {
            minutes.style.color = "red";
            seconds.style.color = "red";
        }
        if (mins == 0 && secs == 0) {
            timerOff();
        }
        else {
            secs--;
        }
    }
};

function getminutes() {
    mins = Math.floor(secs / 60);
    return mins;
}

function getseconds() {
    return secs - Math.round(mins * 60);
}

function buttonToggle(button) {
    if (button.style.display == "none") {
        button.style.display = "inline-block";
    }
    else button.style.display = "none";
}

function reset() {
    location.reload();
}

startButton.addEventListener("click", pressPlay);
stopButton.addEventListener("click", timerOff);
resetButton.addEventListener("click", reset);

buttonToggle(stopButton);
setInterval(Decrement, 1000);