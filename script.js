const rollButton = document.getElementById("rollButton");
const diceResult = document.getElementById("diceResult");
const player = document.getElementById("player");
const spaces = document.querySelectorAll(".space");

let playerPosition = 0;
let moving = false;

const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

rollButton.addEventListener("click", function () {

  if (moving) return;

  moving = true;
  rollButton.disabled = true;

  let animationCount = 0;

  const diceAnimation = setInterval(function () {

    const randomFace =
      diceFaces[Math.floor(Math.random() * diceFaces.length)];

    diceResult.textContent = "🎲 Rolling... " + randomFace;

    animationCount++;

    if (animationCount >= 8) {

      clearInterval(diceAnimation);

      const dice =
        Math.floor(Math.random() * 6) + 1;

      diceResult.textContent =
        "🎲 You rolled: " + diceFaces[dice - 1] + "  " + dice;

      movePlayer(dice);
    }

  }, 100);

});


function movePlayer(steps) {

  const targetPosition =
    Math.min(
      playerPosition + steps,
      spaces.length - 1
    );

  const moveTimer = setInterval(function () {

    if (playerPosition < targetPosition) {

      spaces[playerPosition].classList.remove("current-space");

      playerPosition++;

      spaces[playerPosition].appendChild(player);

      spaces[playerPosition].classList.add("current-space");

    }

    else {

      clearInterval(moveTimer);

      checkSpace();

    }

  }, 350);

}


function checkSpace() {

  if (playerPosition === spaces.length - 1) {

    diceResult.textContent =
      "🎉 Esperanza reached the canteen! You win!";

    rollButton.disabled = true;

    moving = false;

    return;
  }

  moving = false;

  rollButton.disabled = false;
}
