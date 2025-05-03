//Keith Miller, 10 Apr 2025 
// function that contains the JS for the game LowHigh
function lowHigh() {
    //  list of varibles that generate random numbers 1 - 6
    var die1 = Math.floor(Math.random()*6)+1;
    var die2 = Math.floor(Math.random()*6)+1;
    var die3 = Math.floor(Math.random()*6)+1;
    var die4 = Math.floor(Math.random()*6)+1;
    // varibles for the 2 players
    var compTotal;
    var playerTotal;
    // performs the additions for each players die
    compTotal = die1 + die3;
    playerTotal = die2 + die4;
    // console.log displays the discsription of each varible and its value at the time
    
    
    // conditional if/eles statement compares if compTotal is greater than playerTotal. Returns You Lose if true and You Win if false 
    if (compTotal > playerTotal){
      document.getElementById("game").innerHTML="You Lose"
    } else if (compTotal == playerTotal){
      document.getElementById("game").innerHTML="Push"
    } else{
      document.getElementById("game").innerHTML="You Win"
    }
    document.getElementById("die1").innerHTML= die1;
    document.getElementById("die2").innerHTML = die2;
    document.getElementById("die3").innerHTML= die3;
    document.getElementById("die4").innerHTML = die4;
    document.getElementById("compTotal").innerHTML = compTotal;
    document.getElementById("playerTotal").innerHTML = playerTotal;
}