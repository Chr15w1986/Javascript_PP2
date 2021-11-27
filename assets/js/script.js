
// lowest possible DOM handling for milliseconds is 4ms.
// Countdown timer functions:
let throttleAmount = 4;

countdown(10);

function countdown(secs) {
    let milli = secs * 1000;
    let counter = setInterval(function() {
        if(milli <= 0) {
            clearInterval(counter);
            return
        }
        milli -= throttleAmount;
        document.getElementById("milliseconds").innerHTML = `${milli} ms`;
    }, throttleAmount);
}