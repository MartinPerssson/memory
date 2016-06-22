var back = 'img/back.jpg';

var tile = ['img/00.jpg','img/01.jpg','img/02.jpg','img/03.jpg','img/04.jpg','img/05.jpg','img/06.jpg',
'img/07.jpg','img/08.jpg','img/09.jpg','img/10.jpg','img/11.jpg','img/12.jpg','img/13.jpg','img/14.jpg'];


/*<-----  Randomise order of images function -----> */
function randomize(a, b){return (Math.round(Math.random())-0.5);}
var im = [];
for (var i = 0; i < 15; i++) {

   im[i] = new Image();
   im[i].src = tile[i];
   tile[i] = '<img src="'+tile[i]+'" width="60" height="60" alt="tile" \/>';tile[i+15] = tile[i];}

/*<-----  display backside image in tables -----> */
 function displayBack(i) {
   document.getElementById('t'+i).innerHTML = '<div onclick="disp('+i+');return false;"><img src="'+back+'" width="60" height="60" alt="back" \/><\/div>';
 }

 var ch1, ch2, timer, tno, tid, cid, count;

 window.onload=start;

 function start() {
 	var highScore = document.getElementById('highScore');

   for (var i = 0; i <= 29 ;i++)
   displayBack(i);
clearInterval(tid);
	timer = tno = count = 0;tile.sort( randomize );
   counter(); tid = setInterval('counter()', 1000);

   localStorage.clickcount = 0;
 }

 function counter() {
   var min = Math.floor(timer/60);
   var sec = timer%60;
   document.getElementById('count').value = min+':'+ (sec<10 ? '0' : '') + sec;timer++;
 }

 function disp(sel) {
   if (tno>1) {
     clearTimeout(cid); conceal();
   }
   document.getElementById('t'+sel).innerHTML = tile[sel];if (tno==0) ch1 = sel;else {ch2 = sel;  cid = setTimeout('conceal()', 900);}tno++;
 }

 function conceal() {
   tno = 0;
   if (tile[ch1] != tile[ch2]) {
     displayBack(ch1);displayBack(ch2);
   }
   else count++;

   if (count >= 15) {
   	clearInterval(tid);
   	gameOver();
   }
 }

 var playerTime = document.getElementById('count').value;

 function gameOver(){
 	if (count >= 15){
 		
 		document.getElementById('player').innerHTML = "Well done " + localStorage.highScore + ":)";
 		document.getElementById('time').innerHTML = "Your time was " + playerTime + " !!!";
 		document.getElementById("flips").innerHTML = "You flipped the pictures " + localStorage.clickcount + " times.";
 	}
 }

/*<-----  Highscore functions -----> */
var highScore = document.getElementById('highScore');

function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("player").innerHTML = "You flipped the pictures " + localStorage.clickcount + " times.";
    } else {
        document.getElementById("highScore").innerHTML = "Sorry, your browser does not support web storage...";
    }
}
function saveData(){

var inputName = document.getElementById("saveName");
localStorage.setItem("highScore", inputName.value);	
}

function returnData(){
document.getElementById('highScore').value = localStorage.getItem('highScore');
}
