// lowest possible DOM handling for milliseconds is 4ms.

// Countdown timer functions:
const throttleAmount = 4;

function countdown(secs) {
    let timer = secs * 1000;
    let counter = setInterval(function () {
        if (timer <= 0) {
            clearInterval(counter);
            return
        }

// Stack over flow fix to get millisecond timer to work correctly.
        timer -= throttleAmount;
        document.getElementById("milliseconds").innerHTML = `${timer}ms`;
    }, throttleAmount);
}

// Start, Stop and Reset buttons:
// Start timer:
document.getElementById("start").addEventListener("click", function () {
    clearInterval(countdown(5));
});

// Stop timer:
document.getElementById("stop").addEventListener("click", function () {
    clearInterval(countdown(0));
    alert("Oooh So Close!");
});

// Reset game:
document.getElementById("reset").addEventListener("click", function () {
    setInterval(countdown(5));
    if (counter <= 0) {
        setInterval(counter(5));
            return
    }
    alert("Clock reset, Try Again");
});

countdown(5);