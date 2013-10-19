
var gameModule=(function(){

 var timeoutVar;
 var counter=0;
  var canvas = document.getElementById('game');
 var ctx = canvas.getContext('2d');

 canvas.width = 480;
 canvas.height = 320;
 function start(){
 
 
 var ballX = Math.floor(Math.random() * 300);
 var ballY = Math.floor(Math.random() * 500);
 var ballR = Math.floor(Math.random() * 100);

 

 
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(ballX, ballY, ballR, 0, Math.PI * 2 , true);
ctx.fill();

if(counter>=10){
}else{
	timeoutVar=setTimeout(start,1000);
	counter=counter+1;
function gameOver(){
	console.log("Counter: "+counter);
}
}
}

return{
	start: start
}

}) ();

gameModule.start();