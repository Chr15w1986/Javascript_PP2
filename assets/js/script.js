// lowest possible DOM handling for milliseconds is 4ms.
// Countdown timer functions:
const throttleAmount = 4;

countdown(5);

function countdown(secs) {
    let timer = secs * 1000;
    let counter = setInterval(function() {
        if(timer <= 0) {
            clearInterval(counter);
            return
        }
        
        timer -= throttleAmount;
        document.getElementById("milliseconds").innerHTML = `${timer} ms`;
    }, throttleAmount);
}

// Stop and Reset button functions:
document.getElementById("btn").addEventListener("click", function(){
    this.querySelector("#btn").click(function(){
        clearInterval(counter);
    });
});

document.getElementById("btn2").addEventListener("click", function(){
    this.querySelector("#btn2").click(function(){
        setInterval(counter);
        alert("Clock reset, Try Again");
    });
});
