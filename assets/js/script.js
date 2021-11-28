
// lowest possible DOM handling for milliseconds is 4ms.
// Countdown timer functions:
const throttleAmount = 4;

countdown(5);

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

// Stop and Reset button functions:
document.getElementById("btn").addEventListener("click", function(){
    this.querySelector("#btn").click(function(){
        clearInterval(counter);
    });
});

function Reset() {
document.getElementById("btn2").addEventListener("click", function(){
    this.querySelector("#btn2").reset(function(){
        resetInterval(counter);
        alert("Clock reset, Try Again");
    });
});
}