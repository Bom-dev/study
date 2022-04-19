//Set the basic elements to use
const player = {
    currentChoice: null
  }
const master = {
    currentChoice: null
  }
const choices = ["Lapis", "Papyrus", "Scalpellus"];


//Set the function for master's choice as random
function masterChooses(){
    const randomIndex = Math.floor(Math.random() * choices.length);
    master.currentChoice = choices[randomIndex];
  }
  

//Make the effect of clicking the option button
function lChoosen() {
    player.currentChoice = choices[0]
    compareChoices();
  }
  document.getElementById("lButton").addEventListener("click", lChoosen);
  
function pChoosen() {
    player.currentChoice = choices[1]
    compareChoices();
  }
  document.getElementById("pButton").addEventListener("click", pChoosen);
  
function sChoosen() {
    player.currentChoice = choices[2]
    compareChoices();
  }
  document.getElementById("sButton").addEventListener("click", sChoosen);
  



  
function compareChoices(){
    masterChooses();
    if (player.currentChoice === master.currentChoice){
      displayResult("It's a tie'! The master and player both chose " + master.currentChoice);
    }else if(master.currentChoice === choices[0]){
      if(player.currentChoice === choices[1]){
        displayResult("The player wins! The master chose " + master.currentChoice + " and the player chose " + player.currentChoice);
      }else{
        displayResult("The master wins! The master chose " + master.currentChoice + " and the player chose " + player.currentChoice);
      }
    }else if(master.currentChoice === choices[1]){
      if(player.currentChoice === choices[2]){
        displayResult("The player wins! The master chose " + master.currentChoice + " and the player chose " + player.currentChoice);
      }else{
        displayResult("The master wins! The master chose " + master.currentChoice + " and the player chose " + player.currentChoice);
      }
    }else if(master.currentChoice === choices[2]){
      if(player.currentChoice === choices[0]){
        displayResult("The player wins! The master chose " + master.currentChoice + " and the player chose " + player.currentChoice);
      }else{
        displayResult("The master wins! The master chose " + master.currentChoice + " and the player chose " + player.currentChoice);
      }
    }
  }
  
function displayResult(result){
    const resultText = document.getElementById('resultDetail');
   resultText.innerText = result;  
  }

  
  