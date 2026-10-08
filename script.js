
const rollButton = document.getElementById("rollButton");
const diceResult = document.getElementById("diceResult");
const player = document.getElementById("player");
const spaces = document.querySelectorAll(".space");

const questionBox = document.getElementById("questionBox");
const questionText = document.getElementById("questionText");
const answerButtons = document.querySelectorAll(".answerButton");
const answerResult = document.getElementById("answerResult");

let playerPosition = 0;
let moving = false;

const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];


/* QUESTIONS */

const questions = [
  {
    question: "Why does Esperanza want to eat in the canteen?",
    answers: [
      "She wants to feel like the special kids.",
      "She wants to skip class.",
      "She does not like her mother."
    ],
    correct: 0
  },

  {
    question: "What does Esperanza's mother make for her lunch?",
    answers: [
      "A chicken sandwich.",
      "A rice sandwich.",
      "A hamburger."
    ],
    correct: 1
  },

  {
    question: "Who writes a letter for Esperanza?",
    answers: [
      "Her mother.",
      "Her teacher.",
      "Nenny."
    ],
    correct: 0
  },

  {
    question: "Who stops Esperanza before she can eat in the canteen?",
    answers: [
      "Her mother.",
      "A nun.",
      "Carlos."
    ],
    correct: 1
  },

  {
    question: "Who must approve Esperanza's letter?",
    answers: [
      "Sister Superior.",
      "Nenny.",
      "Gloria."
    ],
    correct: 0
  },

  {
    question: "How far does Sister Superior say Esperanza lives from school?",
    answers: [
      "About three blocks.",
      "Ten miles.",
      "One hour away."
    ],
    correct: 0
  },

  {
    question: "Why does Esperanza begin to cry?",
    answers: [
      "She loses her lunch.",
      "She feels embarrassed and uncomfortable.",
      "She wants to go shopping."
    ],
    correct: 1
  },

  {
    question: "How does Esperanza feel about the canteen at the end?",
    answers: [
      "It is amazing.",
      "It is nothing special.",
      "It is better than home."
    ],
    correct: 1
  }
];


/* ROLL DICE */

rollButton.addEventListener("click", function () {

  if (moving) return;

  moving = true;
  rollButton.disabled = true;

  let animationCount = 0;

  const diceAnimation = setInterval(function () {

    const randomFace =
      diceFaces[Math.floor(Math.random() * diceFaces.length)];

    diceResult.textContent =
      "🎲 Rolling... " + randomFace;

    animationCount++;

    if (animationCount >= 8) {

      clearInterval(diceAnimation);

      const dice =
        Math.floor(Math.random() * 6) + 1;

      diceResult.textContent =
        "🎲 You rolled: " +
        diceFaces[dice - 1] +
        "  " +
        dice;

      movePlayer(dice);
    }

  }, 100);

});


/* MOVE PLAYER */

function movePlayer(steps) {

  const targetPosition =
    Math.min(
      playerPosition + steps,
      spaces.length - 1
    );

  const moveTimer = setInterval(function () {

    if (playerPosition < targetPosition) {

      spaces[playerPosition]
        .classList.remove("current-space");

      playerPosition++;

      spaces[playerPosition]
        .appendChild(player);

      spaces[playerPosition]
        .classList.add("current-space");

    } else {

      clearInterval(moveTimer);

      checkSpace();
    }

  }, 350);

}


/* CHECK SPACE */

function checkSpace() {

  if (playerPosition === spaces.length - 1) {

    diceResult.textContent =
      "🎉 Esperanza reached the canteen! You win!";

    rollButton.disabled = true;
    moving = false;

    return;
  }


  if (
    spaces[playerPosition]
      .classList.contains("question-space")
  ) {

    showQuestion();

    return;
  }


  moving = false;
  rollButton.disabled = false;
}


/* SHOW RANDOM QUESTION */

function showQuestion() {

  const randomQuestion =
    questions[
      Math.floor(Math.random() * questions.length)
    ];

  questionText.textContent =
    randomQuestion.question;

  answerResult.textContent = "";

  answerButtons.forEach(function (button, index) {

    button.textContent =
      String.fromCharCode(65 + index) +
      ". " +
      randomQuestion.answers[index];

    button.dataset.correct =
      index === randomQuestion.correct
        ? "true"
        : "false";

    button.disabled = false;
  });


  questionBox.style.display = "flex";
}


/* ANSWERS */

answerButtons.forEach(function (button) {

  button.addEventListener("click", function () {

    answerButtons.forEach(function (btn) {
      btn.disabled = true;
    });


    if (button.dataset.correct === "true") {

      answerResult.textContent =
        "✅ Correct! Great job!";

      setTimeout(function () {

        questionBox.style.display = "none";

        moving = false;
        rollButton.disabled = false;

      }, 1200);

    }

    else {

      answerResult.textContent =
        "❌ Wrong! Go back 1 space.";

      setTimeout(function () {

        spaces[playerPosition]
          .classList.remove("current-space");

        playerPosition =
          Math.max(0, playerPosition - 1);

        spaces[playerPosition]
          .appendChild(player);

        spaces[playerPosition]
          .classList.add("current-space");

        questionBox.style.display = "none";

        moving = false;
        rollButton.disabled = false;

      }, 1400);

    }

  });

});
