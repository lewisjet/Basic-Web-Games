var timeLeft = 5000;
var stopped = false;
var lost = false;

console.log(69420-0);
Trueset(); Trueset(); Trueset(); Trueset(); Trueset();
function TimerReset() {
    timeLeft = 5000;
}

function TimerWork() {
    console.log(69420-2);
    TimerReset();
    stopped = false;
    lost = false;
}

function Trueset()
 {
    setInterval(function(){
        if(timeLeft <= 0 || stopped){if(!lost && timeLeft <= 0){ lost = true; Siren(); } return;}
        timeLeft--;
        document.getElementById("timer").innerHTML = '<p class = "timer">'+(timeLeft / 1000).toString()+"</p>"
        
        },1);
        
}

function Siren()
{
    var audio = new Audio("https://gamesforx1games.s3.eu-west-2.amazonaws.com/Websites/alarm.ogg");
    audio.play();    
}
