let mins;
let secs;
let timer = false;
let alarmPlayed = false;
let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");
let resetButton = document.getElementById("resetButton");

const alarm = new Audio('alarm.ogg');

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
            minutes.style.color = "yellow";
            seconds.style.color = "yellow";
        }
        if (mins <= 0 && secs <= 0) {
            minutes.style.color = "red";
            seconds.style.color = "red";

            if (alarmPlayed == false) {
                alarm.play();
                alarmPlayed = true;
            }
        }

        if (seconds.value < 10 && seconds.value >= 0) {
            seconds.value = 0 + seconds.value
        }

        if (secs < -59) {
            secs = 0;
            seconds.value = 0;
            minutes.value--;
        }

        secs--;
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