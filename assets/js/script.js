
// lowest possible DOM handling for milliseconds is 4ms.
// Countdown timer functions:
let throttleAmount = 4;

countdown(10);

function countdown(secs) {
    const milli = secs * 1000;
    let counter = setInterval(function() {
        // Stackoverflow code to make this function work.
        
        document.getElementById("milliseconds").innerHTML = `${milli} ms`;
    }, throttleAmount);
}

document.getElementById("btn").addEventListener("click", function(){
    let button = 
    console.log("btn");
});

