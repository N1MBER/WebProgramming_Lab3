let canvas;

$(document).ready(function() {
    drawClock();
    setInterval(function () {
        drawClock();
    },50);
});

function drawClock() {
    let plot = document.getElementById("areas");
    let clock = plot.getContext('2d');
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let miliSeconds = now.getMilliseconds();
    clock.clearRect(0,0,500,500);
    clock.fillStyle="#FFF";
    clock.strokeStyle="#fff";
    clock.lineWidth = 15;
    clock.beginPath();
    clock.arc( 250, 250, 200, 3*Math.PI/2, 3*Math.PI/2 + (hours+minutes/60)*Math.PI/12 );
    clock.stroke();
    // MINUTES
    clock.lineWidth = 10;
    clock.beginPath();
    clock.arc( 250, 250, 180, 3*Math.PI/2, 3*Math.PI/2 + (minutes+seconds/60)*Math.PI/30 );
    clock.stroke();

    // SECONDS
    clock.lineWidth = 5;
    clock.beginPath();
    clock.arc( 250, 250, 160, 3*Math.PI/2, 3*Math.PI/2 + (seconds+ miliSeconds/1000)*Math.PI/30 );
    clock.stroke();
    // clock.font = "30px Colibri bold white";
    clock.font="30px Arial ";
    clock.fillText( hours + ":" + minutes  +":" + seconds,190,260);
}
