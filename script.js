const startScreen =
  document.getElementById("startScreen");

const gameScreen =
  document.getElementById("gameScreen");

const playerCountSelect =
  document.getElementById("playerCount");

const nameRows =
  document.querySelectorAll(".name-row");

const startButton =
  document.getElementById("startButton");

const spaces =
  document.querySelectorAll(".space");

const scoreBoard =
  document.getElementById("scoreBoard");

const turnName =
  document.getElementById("turnName");

const progressText =
  document.getElementById("progressText");

const rollButton =
  document.getElementById("rollButton");

const diceVisual =
  document.getElementById("diceVisual");

const diceResult =
  document.getElementById("diceResult");


const questionModal =
  document.getElementById("questionModal");

const questionText =
  document.getElementById("questionText");

const answerOptions =
  document.getElementById("answerOptions");

const questionFeedback =
  document.getElementById("questionFeedback");


const eventModal =
  document.getElementById("eventModal");

const eventIcon =
  document.getElementById("eventIcon");

const eventTitle =
  document.getElementById("eventTitle");

const eventText =
  document.getElementById("eventText");

const eventContinue =
  document.getElementById("eventContinue");


const victoryModal =
  document.getElementById("victoryModal");

const winnerName =
  document.getElementById("winnerName");

const winnerStars =
  document.getElementById("winnerStars");

const restartButton =
  document.getElementById("restartButton");

const confettiLayer =
  document.getElementById("confettiLayer");


const tokenIcons = [
  "🔵",
  "🔴",
  "🟢",
  "🟣"
];


const diceFaces = [
  "⚀",
  "⚁",
  "⚂",
  "⚃",
  "⚄",
  "⚅"
];


let players = [];

let currentPlayerIndex = 0;

let busy = false;

let gameOver = false;



/* =========================
   QUESTIONS
========================= */

const questions = [

  {
    question:
      "Why does Esperanza want to eat in the canteen?",

    answers: [
      "She wants to feel like the special kids.",
      "She wants to skip school.",
      "She does not like eating lunch."
    ],

    correct: 0
  },


  {
    question:
      "What kind of sandwich does Esperanza bring to school?",

    answers: [
      "A ham sandwich.",
      "A rice sandwich.",
      "A cheese sandwich."
    ],

    correct: 1
  },


  {
    question:
      "Who writes a letter for Esperanza?",

    answers: [
      "Her mother.",
      "Her teacher.",
      "Sister Superior."
    ],

    correct: 0
  },


  {
    question:
      "Who stops Esperanza before she can eat in the canteen?",

    answers: [
      "Her teacher.",
      "A nun.",
      "Her mother."
    ],

    correct: 1
  },


  {
    question:
      "Who does Esperanza have to speak with at school?",

    answers: [
      "Sister Superior.",
      "Nenny.",
      "Her English teacher."
    ],

    correct: 0
  },


  {
    question:
      "What does Sister Superior ask Esperanza to point out?",

    answers: [
      "Her classroom.",
      "Her house.",
      "The canteen."
    ],

    correct: 1
  },


  {
    question:
      "How does Esperanza react during the meeting with Sister Superior?",

    answers: [
      "She laughs.",
      "She gets angry.",
      "She cries."
    ],

    correct: 2
  },


  {
    question:
      "What does Sister Superior give Esperanza when she cries?",

    answers: [
      "A Kleenex.",
      "A sandwich.",
      "A book."
    ],

    correct: 0
  },


  {
    question:
      "How long is Esperanza allowed to eat in the canteen?",

    answers: [
      "Every day.",
      "Only that day.",
      "For one month."
    ],

    correct: 1
  },


  {
    question:
      "How does Esperanza feel about the canteen at the end?",

    answers: [
      "It is better than she imagined.",
      "It is nothing special.",
      "She wants to stay there all day."
    ],

    correct: 1
  }

];



/* =========================
   EVENT DATA
========================= */

const events = {

  rice: {
    icon: "🥪",

    title:
      "Rice Sandwich",

    text:
      "You have your lunch ready. Move forward 1 space!",

    move: 1
  },


  letter: {
    icon: "✉️",

    title:
      "Mother's Letter",

    text:
      "Your mother wrote a letter for you. Earn 1 Star!",

    stars: 1
  },


  nun: {
    icon: "👩‍🦳",

    title:
      "The Nun",

    text:
      "The nun stops you before the canteen. Go back 1 space!",

    move: -1
  },


  sister: {
    icon: "📚",

    title:
      "Sister Superior",

    text:
      "Sister Superior wants an answer. Get ready for another question!",

    question: true
  },


  cry: {
    icon: "😢",

    title:
      "Crying",

    text:
      "Esperanza feels embarrassed. You lose your next turn.",

    skip: 1
  },


  kleenex: {
    icon: "🤧",

    title:
      "Kleenex",

    text:
      "You receive a Kleenex and feel a little better. Earn 1 Star!",

    stars: 1
  },


  permission: {
    icon: "⭐",

    title:
      "Permission",

    text:
      "You are allowed to eat in the canteen today. Earn 2 Stars!",

    stars: 2
  }

};



/* =========================
   PLAYER SETUP
========================= */

function updatePlayerNameFields() {

  const count =
    Number(playerCountSelect.value);


  nameRows.forEach(function (row, index) {

    if (index < count) {

      row.style.display = "flex";

    }

    else {

      row.style.display = "none";

    }

  });

}


playerCountSelect.addEventListener(
  "change",
  updatePlayerNameFields
);


updatePlayerNameFields();



/* =========================
   START GAME
========================= */

startButton.addEventListener(
  "click",
  startGame
);


function startGame() {

  clearOldGame();

  const playerCount =
    Number(playerCountSelect.value);


  for (
    let i = 0;
    i < playerCount;
    i++
  ) {

    const input =
      document.getElementById(
        "playerName" + i
      );


    const typedName =
      input.value.trim();


    const player = {

      name:
        typedName ||
        "Player " + (i + 1),

      token:
        tokenIcons[i],

      position: 0,

      stars: 0,

      skipTurns: 0,

      tokenElement: null

    };


    const token =
      document.createElement("span");


    token.className =
      "player-token";


    token.textContent =
      player.token;


    token.title =
      player.name;


    player.tokenElement =
      token;


    players.push(player);


    const startTokenZone =
      spaces[0].querySelector(
        ".token-zone"
      );


    startTokenZone.appendChild(
      token
    );

  }


  currentPlayerIndex = 0;

  busy = false;

  gameOver = false;


  startScreen.classList.add(
    "screen-hidden"
  );


  gameScreen.classList.remove(
    "screen-hidden"
  );


  rollButton.disabled = false;

  diceVisual.textContent = "⚀";

  diceResult.textContent =
    "Ready!";


  updateInterface();

}



/* =========================
   CLEAN OLD GAME
========================= */

function clearOldGame() {

  players = [];


  document
    .querySelectorAll(".player-token")
    .forEach(function (token) {

      token.remove();

    });


  spaces.forEach(function (space) {

    space.classList.remove(
      "active-space"
    );

  });


  scoreBoard.innerHTML = "";

}



/* =========================
   UPDATE INTERFACE
========================= */

function updateInterface() {

  if (players.length === 0) {
    return;
  }


  const current =
    players[currentPlayerIndex];


  turnName.textContent =
    current.token +
    " " +
    current.name;


  progressText.textContent =
    current.position +
    " / " +
    (spaces.length - 1);


  spaces.forEach(function (space) {

    space.classList.remove(
      "active-space"
    );

  });


  spaces[current.position]
    .classList.add(
      "active-space"
    );


  drawScoreBoard();

}



/* =========================
   SCOREBOARD
========================= */

function drawScoreBoard() {

  scoreBoard.innerHTML = "";


  players.forEach(
    function (player, index) {

      const card =
        document.createElement("div");


      card.className =
        "player-score";


      if (
        index === currentPlayerIndex
      ) {

        card.classList.add(
          "current-player"
        );

      }


      const token =
        document.createElement("span");


      token.className =
        "score-token";


      token.textContent =
        player.token;


      const name =
        document.createElement("span");


      name.className =
        "score-name";


      name.textContent =
        player.name;


      const stars =
        document.createElement("span");


      stars.className =
        "score-stars";


      stars.textContent =
        "⭐ " + player.stars;


      card.appendChild(token);

      card.appendChild(name);

      card.appendChild(stars);


      scoreBoard.appendChild(card);

    }
  );

}



/* =========================
   ROLL DICE
========================= */

rollButton.addEventListener(
  "click",
  rollDice
);


function rollDice() {

  if (
    busy ||
    gameOver
  ) {

    return;
  }


  const player =
    players[currentPlayerIndex];


  /* SKIPPED TURN */

  if (
    player.skipTurns > 0
  ) {

    busy = true;

    rollButton.disabled = true;

    player.skipTurns--;


    diceResult.textContent =
      "😢 " +
      player.name +
      " loses this turn!";


    setTimeout(
      endTurn,
      1200
    );


    return;
  }


  busy = true;

  rollButton.disabled = true;


  diceVisual.classList.add(
    "rolling"
  );


  let count = 0;


  const animation =
    setInterval(function () {

      const fakeRoll =
        Math.floor(
          Math.random() * 6
        );


      diceVisual.textContent =
        diceFaces[fakeRoll];


      count++;


      if (count >= 10) {

        clearInterval(
          animation
        );


        diceVisual.classList.remove(
          "rolling"
        );


        const roll =
          Math.floor(
            Math.random() * 6
          ) + 1;


        diceVisual.textContent =
          diceFaces[roll - 1];


        diceResult.textContent =
          player.name +
          " rolled " +
          roll +
          "!";


        movePlayer(
          player,
          roll
        );

      }

    }, 85);

}



/* =========================
   MOVE PLAYER
========================= */

async function movePlayer(
  player,
  steps
) {

  const target =
    Math.min(
      player.position + steps,
      spaces.length - 1
    );


  while (
    player.position < target
  ) {

    await wait(250);


    player.position++;


    const zone =
      spaces[player.position]
        .querySelector(
          ".token-zone"
        );


    zone.appendChild(
      player.tokenElement
    );


    updateInterface();

  }


  await wait(300);


  resolveSpace(player);

}



/* =========================
   RESOLVE SPACE
========================= */

function resolveSpace(player) {

  const space =
    spaces[player.position];


  const type =
    space.dataset.type;


  if (type === "finish") {

    showVictory(player);

    return;
  }


  if (type === "question") {

    showQuestion(player);

    return;
  }


  if (type === "event") {

    const eventKey =
      space.dataset.event;


    showEvent(
      player,
      eventKey
    );

    return;
  }


  setTimeout(
    endTurn,
    500
  );

}



/* =========================
   QUESTIONS
========================= */

function showQuestion(player) {

  const question =
    questions[
      Math.floor(
        Math.random() *
        questions.length
      )
    ];


  questionText.textContent =
    question.question;


  answerOptions.innerHTML = "";

  questionFeedback.textContent = "";


  question.answers.forEach(
    function (answer, index) {

      const button =
        document.createElement(
          "button"
        );


      button.className =
        "answer-option";


      button.textContent =
        String.fromCharCode(
          65 + index
        ) +
        ". " +
        answer;


      button.addEventListener(
        "click",
        async function () {

          const allButtons =
            answerOptions
              .querySelectorAll(
                ".answer-option"
              );


          allButtons.forEach(
            function (btn) {

              btn.disabled = true;

            }
          );


          if (
            index ===
            question.correct
          ) {

            button.classList.add(
              "correct-answer"
            );


            player.stars++;


            questionFeedback
              .textContent =
              "✅ Correct! +1 Star";


            drawScoreBoard();


            await wait(1000);


            closeModal(
              questionModal
            );


            endTurn();

          }

          else {

            button.classList.add(
              "wrong-answer"
            );


            allButtons[
              question.correct
            ].classList.add(
              "correct-answer"
            );


            questionFeedback
              .textContent =
              "❌ Wrong! Go back 1 space.";


            await wait(1100);


            closeModal(
              questionModal
            );


            await moveBackward(
              player,
              1
            );


            endTurn();

          }

        }
      );


      answerOptions.appendChild(
        button
      );

    }
  );


  openModal(
    questionModal
  );

}



/* =========================
   SPECIAL EVENTS
========================= */

function showEvent(
  player,
  eventKey
) {

  const event =
    events[eventKey];


  if (!event) {

    endTurn();

    return;
  }


  eventIcon.textContent =
    event.icon;


  eventTitle.textContent =
    event.title;


  eventText.textContent =
    event.text;


  openModal(
    eventModal
  );


  eventContinue.onclick =
    async function () {

      eventContinue.onclick = null;


      closeModal(
        eventModal
      );


      /* MOVEMENT */

      if (event.move) {

        if (event.move > 0) {

          await moveForwardBonus(
            player,
            event.move
          );

        }

        else {

          await moveBackward(
            player,
            Math.abs(
              event.move
            )
          );

        }

      }


      /* STARS */

      if (event.stars) {

        player.stars +=
          event.stars;


        drawScoreBoard();

      }


      /* SKIP */

      if (event.skip) {

        player.skipTurns +=
          event.skip;

      }


      /* EXTRA QUESTION */

      if (event.question) {

        await wait(300);

        showQuestion(player);

        return;

      }


      await wait(300);


      endTurn();

    };

}



/* =========================
   BONUS MOVEMENT
========================= */

async function moveForwardBonus(
  player,
  steps
) {

  const target =
    Math.min(
      player.position + steps,
      spaces.length - 1
    );


  while (
    player.position < target
  ) {

    await wait(250);


    player.position++;


    spaces[player.position]
      .querySelector(
        ".token-zone"
      )
      .appendChild(
        player.tokenElement
      );


    updateInterface();

  }

}



async function moveBackward(
  player,
  steps
) {

  const target =
    Math.max(
      0,
      player.position - steps
    );


  while (
    player.position > target
  ) {

    await wait(250);


    player.position--;


    spaces[player.position]
      .querySelector(
        ".token-zone"
      )
      .appendChild(
        player.tokenElement
      );


    updateInterface();

  }

}



/* =========================
   END TURN
========================= */

function endTurn() {

  if (gameOver) {
    return;
  }


  currentPlayerIndex =
    (
      currentPlayerIndex + 1
    ) %
    players.length;


  busy = false;


  rollButton.disabled = false;


  diceResult.textContent =
    players[currentPlayerIndex]
      .name +
    "'s turn!";


  updateInterface();

}



/* =========================
   VICTORY
========================= */

function showVictory(player) {

  gameOver = true;

  busy = true;

  rollButton.disabled = true;


  winnerName.textContent =
    player.token +
    " " +
    player.name;


  winnerStars.textContent =
    player.stars;


  victoryModal.classList.add(
    "open"
  );


  launchConfetti();

}



/* =========================
   CONFETTI
========================= */

function launchConfetti() {

  confettiLayer.innerHTML = "";


  const colors = [
    "#e9b949",
    "#6e9fda",
    "#67a96c",
    "#c96c68",
    "#937ac0"
  ];


  for (
    let i = 0;
    i < 80;
    i++
  ) {

    const piece =
      document.createElement(
        "span"
      );


    piece.className =
      "confetti";


    piece.style.left =
      Math.random() *
      100 +
      "%";


    piece.style.background =
      colors[
        Math.floor(
          Math.random() *
          colors.length
        )
      ];


    piece.style.animationDelay =
      Math.random() *
      1.2 +
      "s";


    piece.style.animationDuration =
      2 +
      Math.random() *
      2 +
      "s";


    confettiLayer.appendChild(
      piece
    );

  }


  setTimeout(
    function () {

      confettiLayer.innerHTML =
        "";

    },
    5000
  );

}



/* =========================
   PLAY AGAIN
========================= */

restartButton.addEventListener(
  "click",
  function () {

    closeModal(
      victoryModal
    );


    confettiLayer.innerHTML =
      "";


    clearOldGame();


    gameScreen.classList.add(
      "screen-hidden"
    );


    startScreen.classList.remove(
      "screen-hidden"
    );


    gameOver = false;

    busy = false;

    currentPlayerIndex = 0;


    diceVisual.textContent =
      "⚀";


    diceResult.textContent =
      "Ready!";

  }
);



/* =========================
   MODAL HELPERS
========================= */

function openModal(modal) {

  modal.classList.add(
    "open"
  );

}


function closeModal(modal) {

  modal.classList.remove(
    "open"
  );

}



/* =========================
   WAIT
========================= */

function wait(milliseconds) {

  return new Promise(
    function (resolve) {

      setTimeout(
        resolve,
        milliseconds
      );

    }
  );

}
