
// lowest possible DOM handling for milliseconds is 4ms.
// Countdown timer functions:
const throttleAmount = 4;

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

document.getElementById("btn").addEventListener("click", function(){
    $("#btn").click(function(){
        clearInterval(counter);
    });
});
document.getElementById("btn2").addEventListener("click", function(){
    $("#btn2").reset(function(){
        resetInterval(counter);
        alert("Clock reset, Try Again");
    });
});