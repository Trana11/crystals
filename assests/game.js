let blueCrystal = 0;
let clearCrystal = 0;
let pinkCrystal = 0;
let purpleCrystal = 0;

let currentScore = 0;
let targetScore = 0;

let winCount = 0;
let lossCount = 0;

getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function startGame() {
  let currentScore = 0;
  targetScore = getRandom(19, 120);
  clearCrystal = getRandom(1, 12);
  blueCrystal = getRandom(1, 12);
  purpleCrystal = getRandom(1, 12);
  pinkCrystal = getRandom(1, 12);

  $("#yourScore").html(currentScore);
  $("#targetScore").html(targetScore);

  console.log("---------------");
  console.log(targetScore);
  console.log(blueCrystal);
}

function checkWin() {
  if (currentScore > targetScore) {
    alert("you lost!");
    lossCount++;
    $("#lossCount").html(lossCount);
    startGame();
  } else if (currentScore === targetScore) {
    alert("you won!");
    winCount++;
    $("#winCount").html(winCount);
    startGame();
  }
}
startGame();

$("#blue").click(function() {
  currentScore = currentScore + blueCrystal;
  $("#yourScore").html(currentScore);
  checkWin();
});
$("#clear").click(function() {
  currentScore = currentScore + clearCrystal;
  $("#yourScore").html(currentScore);
  checkWin();
});
$("#pink").click(function() {
  currentScore = currentScore + pinkCrystal;
  $("#yourScore").html(currentScore);
  checkWin();
});
$("#purple").click(function() {
  currentScore = currentScore + purpleCrystal;
  $("#yourScore").html(currentScore);
  checkWin();
});
