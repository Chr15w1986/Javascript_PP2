// lowest possible DOM handling for milliseconds is 4ms.

// Countdown timer functions:
let counter;
let timer = 5000;
const throttleAmount = 4;

function countdown(secs) {
    timer = secs; //timer value for when the function is called, is being set by the number or timer value that is being passed in.
    counter = setInterval(function () {
        if (timer <= 4) { //if timer is less than or equal to 4, do this and then continue to line 20.
            clearInterval(counter); //stops the timer
        }

        // Stack over flow fix to get milliseconds to work correctly.
        // timer = timer - throttleAmount;
        timer -= throttleAmount;
        document.getElementById("milliseconds").innerHTML = `${timer}ms`;
    }, throttleAmount); //do this every 4 milliseconds
}

// Start, Stop and Reset buttons:
// Start timer:
document.getElementById("start").addEventListener("click", function () {
    countdown(timer); //this runs countdown with the current value of timer
    console.log("start")
});

// Stop timer:
document.getElementById("stop").addEventListener("click", function () {
    clearInterval(counter); //stops the timer
    if (timer <= 200) {
        alert("YOU WIN!!")
    } else {
        timer = 0
        alert("YOU LOSE!!")
    }
});

// Reset game:
document.getElementById("reset").addEventListener("click", function () {
    clearInterval(counter);
    countdown(5000); // puts the timer to 5000ms and counts down. 
    console.log(reset)
});