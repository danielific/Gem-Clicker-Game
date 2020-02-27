var gameData = {          //crucial variables
    geodeOnScreen: false, //determines if the Geode appears on screen
    geodeHealthPoints: 10, //how much hp the geode must lose before dissapearing from screen
    totalDirt: 0, //how much dirt the user has
    totalStone: 0, //how much stone the user has
    clickStrength: 1, //how much damage the click does to the geode
    
}
  let smashGeodeBtn = document.getElementById('smashGeode');
  let totalDirt = document.getElementById("totalDirt");
  let totalStone = document.getElementById("totalStone");
  smashGeodeBtn.addEventListener('click', smashGeode);


function smashGeode(amount){
  
	gameData.geodeHealthPoints -= amount;
	document.getElementById("geodeHealthPoints").value -= "1";
  }


var mainGameLoop = window.setInterval(function() { //ticks, 1 per second.
}, 1000)
