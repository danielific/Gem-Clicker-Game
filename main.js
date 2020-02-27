var gameData = {          //crucial variables
    geodeOnScreen: false, //determines if the Geode appears on screen
    geodeHealthPoints: 10,
    totalDirt: 0, //how much dirt the user has
    totalStone: 0, //how much stone the user has
    
}
  let smashGeodeBtn = document.getElementById('smashGeode');
  
    
function smashGeode(amount){
	gameData.geodeHealthPoints -= amount;
	geodeHealth.innerText = gameData.geodeHealthPoints - "1"}







var mainGameLoop = window.setInterval(function() { //ticks, 1 per second.
}, 1000)
