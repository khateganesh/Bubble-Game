var time = 60;
var score = 0;
var Hitrn = 0;
function makeBubble(){
    var clutter = "";
    for(var i = 0; i <= 169; i++){
        var num = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${num}</div>`;
        document.querySelector("#pbtm").innerHTML = clutter;
    }
}
function runTime(){
    var timeint = setInterval(function(){
        if(time > 0){
            time--;
            document.querySelector("#time").textContent = time;
        }
        else{
            clearInterval(timeint);
            document.querySelector("#pbtm").innerHTML = `<h1>Your score was ${score}</h1> <br> <a href="main.html">Play Again</a>`;
        }
    }, 1000)
}
function getNewHit(){
    Hitrn = Math.floor(Math.random()*10);
    document.querySelector("#Hit").textContent = Hitrn;
}
function incScore(){
    score += 10;
    document.querySelector("#score").textContent = score;
}
document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum === Hitrn){
        incScore();
        makeBubble();
        getNewHit();
    }
});
runTime(); 
makeBubble();
getNewHit();
