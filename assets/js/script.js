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

        // Stack over flow fix to get milliseconds to work correctly.
        timer -= throttleAmount;
        document.getElementById("milliseconds").innerHTML = `${timer}ms`;
    }, throttleAmount);
}

// Start, Stop and Reset buttons:
// Start timer:
document.getElementById("start").addEventListener("click", function () {
    clearInterval(countdown(5));
    console.log(start)
});

// Stop timer:
document.getElementById("stop").addEventListener("click", function () {
    clearInterval(countdown(0));
    console.log(stop)
});

// Reset game:
document.getElementById("reset").addEventListener("click", function () {
    setInterval(countdown(5));
    if (countdown <= 0) {
        setInterval(counter(5));
        return
    }
    console.log(reset)
});

countdown(5);