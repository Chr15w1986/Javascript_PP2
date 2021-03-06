//Global variables
let counter = null;
const timer = 5000;

// Stack over flow fix to get milliseconds to work correctly, 
// lowest possible DOM handling for milliseconds is 4ms.
const throttleAmount = 4;

document.getElementById("milliseconds").innerHTML = `${timer}ms`;

// Function for starting the timer
function startCountdown(timer) {
    let secs = timer;
    counter = setInterval(function () {

        // This reduces the timer by throttle amount of 4ms
        secs -= throttleAmount;
        document.getElementById("milliseconds").innerHTML = `${secs}ms`;
        // Reduces the opacity of the timer the closer it gets to zero
        document.getElementById("milliseconds").style.color = `rgba(32, 30, 30, ${(secs/timer*2)}`;

    }, throttleAmount);
}

// Function for stopping the timer
function stopCountdown(timer) {

    // Stops countdown
    clearInterval(counter);

    // Resets HTML
    document.getElementById("milliseconds").innerHTML = `${timer}ms`;
    document.getElementById("milliseconds").style.color = `rgba(32, 30, 30, 1)`;
}

// Function for calculating win lose
function calculateTime() {

    let win = null;

    // Obtain millisecond value from timer
    let offset = parseInt(document.getElementById("milliseconds").innerHTML.slice(0, -2));

    // Calculate if within 300 milliseconds of reaching 0
    if (offset > 300) {
        win = false;
    } else if (offset < -300) {
        win = false;
    } else {
        win = true;
    }

    // Alert for the user to know how much they have won by
    if (win) {
        alert(`YOU WIN!! You were within ${offset} milliseconds!`);
    } else if (offset > 0) {
        alert(`Oops, you were ${offset} milliseconds too fast!`);
    } else if (offset < 0) {
        alert(`Oh no, you were ${offset} milliseconds too slow!`);
    }
}

//////////// Event listener declarations

// Start timer:
document.getElementById("start").addEventListener("click", function () {

    // This runs countdown with the current value of timer
    startCountdown(timer);

    // Add/Remove Hidden Class from HTML Elements
    document.getElementById("start").classList.add("hidden");
    document.getElementById("stop").classList.remove("hidden");

});

// Stop timer:
document.getElementById("stop").addEventListener("click", function () {

    // Add/Remove Hidden Class from HTML Elements
    document.getElementById("stop").classList.add("hidden");
    document.getElementById("start").classList.remove("hidden");

    // Determine if win or lose
    calculateTime();

    // This runs countdown with the current value of timer
    stopCountdown(timer);

});

// Reset game:
document.getElementById("reset").addEventListener("click", function () {

    stopCountdown(timer);

    // Add/Remove Hidden Class from HTML Elements
    document.getElementById("stop").classList.add("hidden");
    document.getElementById("start").classList.remove("hidden");

});