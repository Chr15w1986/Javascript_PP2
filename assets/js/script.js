// Countdown timer functions:
let counter = null;
const timer = 5000;

// Stack over flow fix to get milliseconds to work correctly, lowest possible DOM handling for milliseconds is 4ms.
const throttleAmount = 4;

document.getElementById("milliseconds").innerHTML = `${timer}ms`;

function startCountdown(timer) {
    let secs = timer;
    counter = setInterval(function () {

        // this reduces the timer by throttle amount of 4ms
        secs -= throttleAmount;
        document.getElementById("milliseconds").innerHTML = `${secs}ms`;
        // Reduces the opacity of the timer the closer it gets to zero
        document.getElementById("milliseconds").style.color = `rgba(32, 30, 30, ${(secs/timer)}`;

    }, throttleAmount);
}

// Stop timer:
document.getElementById("stop").addEventListener("click", function () {
    clearInterval(counter); //stops the timer
    if (timer <= 200) {
        alert("YOU WIN!!");
    }
    if (timer = 0) {
        alert("YOU LOSE!!")
    } else {
        if (timer >= 4) {
            alert("YOU LOSE!!");
        }
    }
});

// Reset game:
document.getElementById("reset").addEventListener("click", function () {
    clearInterval(counter);
    countdown(5000); // puts the timer to 5000ms and starts counting down. 
});