const startScreen =
  document.getElementById("startScreen");

const gameScreen =
  document.getElementById("gameScreen");

const playerNameInput =
  document.getElementById("playerName");

const startButton =
  document.getElementById("startButton");

const soundStart =
  document.getElementById("soundStart");

const soundGame =
  document.getElementById("soundGame");


const board =
  document.getElementById("board");

const spaces =
  document.querySelectorAll(".space");


const heartsValue =
  document.getElementById("heartsValue");

const starsValue =
  document.getElementById("starsValue");

const streakValue =
  document.getElementById("streakValue");

const correctValue =
  document.getElementById("correctValue");

const chapterName =
  document.getElementById("chapterName");

const progressText =
  document.getElementById("progressText");

const progressFill =
  document.getElementById("progressFill");

const displayName =
  document.getElementById("displayName");

const rollCount =
  document.getElementById("rollCount");


const diceVisual =
  document.getElementById("diceVisual");

const diceResult =
  document.getElementById("diceResult");

const rollButton =
  document.getElementById("rollButton");


const questionModal =
  document.getElementById("questionModal");

const questionBadge =
  document.getElementById("questionBadge");

const questionText =
  document.getElementById("questionText");

const answerOptions =
  document.getElementById("answerOptions");

const questionFeedback =
  document.getElementById("questionFeedback");


const eventModal =
  document.getElementById("eventModal");

const eventLabel =
  document.getElementById("eventLabel");

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

const finalName =
  document.getElementById("finalName");

const finalScore =
  document.getElementById("finalScore");

const finalRank =
  document.getElementById("finalRank");

const finalStars =
  document.getElementById("finalStars");

const finalHearts =
  document.getElementById("finalHearts");

const finalCorrect =
  document.getElementById("finalCorrect");

const finalBestStreak =
  document.getElementById("finalBestStreak");

const finalRolls =
  document.getElementById("finalRolls");

const finalAnswered =
  document.getElementById("finalAnswered");

const restartButton =
  document.getElementById("restartButton");


const confettiLayer =
  document.getElementById("confettiLayer");



/* =========================
   GAME STATE
========================= */

const state = {

  name: "Player",

  position: 0,

  hearts: 3,

  maxHearts: 3,

  stars: 0,

  streak: 0,

  bestStreak: 0,

  correct: 0,

  answered: 0,

  rolls: 0,

  skipTurns: 0,

  busy: false,

  gameOver: false,

  sound: true

};


let playerToken = null;

let questionDeck = [];

const checkpointsSeen =
  new Set();


const mandatoryCheckpoints = [
  7,
  13,
  21
];


const diceFaces = [
  "⚀",
  "⚁",
  "⚂",
  "⚃",
  "⚄",
  "⚅"
];



/* =========================
   QUESTIONS
========================= */

const questions = [

  {
    question:
      "Why does Esperanza want to eat in the canteen?",

    answers: [
      "She wants to feel like the special kids.",
      "She wants to skip class.",
      "She wants to avoid her friends."
    ],

    correct: 0
  },


  {
    question:
      "Why are some students allowed to eat in the canteen?",

    answers: [
      "Their mothers are not home or they live too far away.",
      "They have better grades.",
      "They are older students."
    ],

    correct: 0
  },


  {
    question:
      "How long does Esperanza keep asking her mother?",

    answers: [
      "One day.",
      "Three days.",
      "One week."
    ],

    correct: 1
  },


  {
    question:
      "What kind of sandwich does Esperanza bring to school?",

    answers: [
      "A ham sandwich.",
      "A rice sandwich.",
      "A chicken sandwich."
    ],

    correct: 1
  },


  {
    question:
      "Why does Esperanza have a rice sandwich?",

    answers: [
      "They do not have lunch meat.",
      "Rice is her favorite food.",
      "The school requires rice."
    ],

    correct: 0
  },


  {
    question:
      "Who writes the letter for Esperanza?",

    answers: [
      "Her mother.",
      "Nenny.",
      "Her teacher."
    ],

    correct: 0
  },


  {
    question:
      "Who stops Esperanza before she enters the canteen?",

    answers: [
      "A nun.",
      "Her mother.",
      "Gloria."
    ],

    correct: 0
  },


  {
    question:
      "Where does the nun send Esperanza?",

    answers: [
      "Back home.",
      "To Sister Superior.",
      "To her classroom."
    ],

    correct: 1
  },


  {
    question:
      "What does Sister Superior ask Esperanza to identify?",

    answers: [
      "Her classroom.",
      "Her house.",
      "Her mother."
    ],

    correct: 1
  },


  {
    question:
      "About how far does Sister Superior say Esperanza lives from school?",

    answers: [
      "About three long blocks.",
      "Ten miles.",
      "One block."
    ],

    correct: 0
  },


  {
    question:
      "How does Esperanza react when Sister Superior questions her?",

    answers: [
      "She laughs.",
      "She cries.",
      "She leaves."
    ],

    correct: 1
  },


  {
    question:
      "What does Esperanza ask for after she begins crying?",

    answers: [
      "A Kleenex.",
      "A new sandwich.",
      "A pencil."
    ],

    correct: 0
  },


  {
    question:
      "How long does Sister Superior allow Esperanza to stay in the canteen?",

    answers: [
      "Only for that day.",
      "For the rest of the year.",
      "For one week."
    ],

    correct: 0
  },


  {
    question:
      "What is the rice like when Esperanza finally eats it?",

    answers: [
      "Hot.",
      "Cold.",
      "Sweet."
    ],

    correct: 1
  },


  {
    question:
      "How does Esperanza describe the canteen at the end?",

    answers: [
      "Amazing.",
      "Nothing special.",
      "Very beautiful."
    ],

    correct: 1
  },


  {
    question:
      "Why does Esperanza nod at the wrong house?",

    answers: [
      "She feels pressured and embarrassed.",
      "She forgot where she lives.",
      "She wants to move there."
    ],

    correct: 0
  }

];



/* =========================
   EVENTS
========================= */

const events = {

  rice: {

    icon: "🥪",

    title:
      "Rice Sandwich",

    text:
      "Your lunch is ready. You earn 1 Star!",

    stars: 1

  },


  letter: {

    icon: "✉️",

    title:
      "Mother's Letter",

    text:
      "Your mother writes a note for the school. Move forward 1 extra space!",

    move: 1

  },


  nun: {

    icon: "👩‍🦳",

    title:
      "The Nun",

    text:
      "The nun stops you before the canteen. Move back 1 space.",

    move: -1

  },


  cry: {

    icon: "😢",

    title:
      "Embarrassed",

    text:
      "Esperanza feels embarrassed and begins to cry. You lose your next roll.",

    skip: 1

  },


  kleenex: {

    icon: "🤧",

    title:
      "Kleenex",

    text:
      "You get a Kleenex. Recover 1 Heart!",

    heal: 1

  },


  permission: {

    icon: "⭐",

    title:
      "Permission Granted",

    text:
      "Sister Superior lets you stay for today. You earn 2 Stars!",

    stars: 2

  }

};



/* =========================
   CHECKPOINT STORIES
========================= */

const checkpointStories = {

  7: {

    icon: "🏫",

    label:
      "CHAPTER 2",

    title:
      "The School",

    text:
      "Esperanza arrives at school carrying her mother's letter and her rice sandwich."

  },


  13: {

    icon: "📚",

    label:
      "CHAPTER 3",

    title:
      "Sister Superior",

    text:
      "The nun sends Esperanza upstairs. Sister Superior reads the letter and asks where Esperanza lives."

  },


  21: {

    icon: "🚪",

    label:
      "CHAPTER 4",

    title:
      "The Canteen",

    text:
      "After an uncomfortable meeting, Esperanza is allowed to stay in the canteen for today."

  }

};



/* =========================
   START
========================= */

startButton.addEventListener(
  "click",
  startGame
);


function startGame() {

  resetState();


  const typedName =
    playerNameInput.value.trim();


  state.name =
    typedName || "Player";


  displayName.textContent =
    state.name;


  createPlayerToken();


  startScreen.classList.add(
    "hidden"
  );


  gameScreen.classList.remove(
    "hidden"
  );


  ensureAudio();


  playTone(
    440,
    0.08
  );


  updateUI();


  setTimeout(
    function () {

      spaces[0].scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

    },
    150
  );

}



/* =========================
   RESET
========================= */

function resetState() {

  state.position = 0;

  state.hearts = 3;

  state.stars = 0;

  state.streak = 0;

  state.bestStreak = 0;

  state.correct = 0;

  state.answered = 0;

  state.rolls = 0;

  state.skipTurns = 0;

  state.busy = false;

  state.gameOver = false;


  checkpointsSeen.clear();


  questionDeck = [];


  document
    .querySelectorAll(
      ".player-token"
    )
    .forEach(
      function (token) {

        token.remove();

      }
    );


  spaces.forEach(
    function (space) {

      space.classList.remove(
        "active-space"
      );

    }
  );


  closeModal(
    questionModal
  );


  closeModal(
    eventModal
  );


  closeModal(
    victoryModal
  );


  confettiLayer.innerHTML =
    "";



  rollButton.disabled =
    false;


  diceVisual.textContent =
    "⚀";


  diceResult.textContent =
    "Ready for your journey!";

}



/* =========================
   PLAYER TOKEN
========================= */

function createPlayerToken() {

  playerToken =
    document.createElement(
      "div"
    );


  playerToken.className =
    "player-token";


  playerToken.textContent =
    "👧";


  spaces[0]
    .querySelector(
      ".token-zone"
    )
    .appendChild(
      playerToken
    );

}



/* =========================
   UI
========================= */

function updateUI() {

  heartsValue.textContent =
    renderHearts();


  starsValue.textContent =
    state.stars;


  streakValue.textContent =
    state.streak;


  correctValue.textContent =
    state.correct;


  rollCount.textContent =
    state.rolls;


  chapterName.textContent =
    getChapterName(
      state.position
    );


  progressText.textContent =
    state.position +
    " / " +
    (spaces.length - 1);


  const percent =
    (
      state.position /
      (spaces.length - 1)
    ) * 100;


  progressFill.style.width =
    percent + "%";


  spaces.forEach(
    function (space) {

      space.classList.remove(
        "active-space"
      );

    }
  );


  spaces[
    state.position
  ].classList.add(
    "active-space"
  );

}


function renderHearts() {

  let result = "";


  for (
    let i = 0;
    i < state.maxHearts;
    i++
  ) {

    result +=
      i < state.hearts
        ? "❤️"
        : "🖤";

  }


  return result;

}


function getChapterName(position) {

  if (position <= 6) {

    return "Chapter 1 · Home";

  }


  if (position <= 12) {

    return "Chapter 2 · School";

  }


  if (position <= 20) {

    return "Chapter 3 · Sister Superior";

  }


  return "Chapter 4 · Canteen";

}



/* =========================
   DICE
========================= */

rollButton.addEventListener(
  "click",
  rollDice
);


function rollDice() {

  if (
    state.busy ||
    state.gameOver
  ) {

    return;
  }


  /* SKIP TURN */

  if (
    state.skipTurns > 0
  ) {

    state.busy = true;

    rollButton.disabled =
      true;


    state.skipTurns--;


    diceResult.textContent =
      "😢 You lose this roll.";


    playLowTone();


    setTimeout(
      function () {

        state.busy = false;

        rollButton.disabled =
          false;


        diceResult.textContent =
          "You can roll again!";

      },
      1000
    );


    return;
  }


  state.busy = true;

  rollButton.disabled =
    true;


  state.rolls++;


  updateUI();


  diceVisual.classList.add(
    "rolling"
  );


  playRollSound();


  let animationCount = 0;


  const animation =
    setInterval(
      function () {

        const fake =
          Math.floor(
            Math.random() * 6
          );


        diceVisual.textContent =
          diceFaces[fake];


        animationCount++;


        if (
          animationCount >= 10
        ) {

          clearInterval(
            animation
          );


          diceVisual.classList.remove(
            "rolling"
          );


          const roll =
            weightedRoll();


          diceVisual.textContent =
            diceFaces[
              roll - 1
            ];


          diceResult.textContent =
            "You rolled " +
            roll +
            "!";


          movePlayer(
            roll
          );

        }

      },
      75
    );

}



/* 1 = 40%
   2 = 40%
   3 = 20%
*/

function weightedRoll() {

  const chance =
    Math.random();


  if (
    chance < 0.40
  ) {

    return 1;

  }


  if (
    chance < 0.80
  ) {

    return 2;

  }


  return 3;

}



/* =========================
   TARGET / CHECKPOINT
========================= */

function getTargetPosition(
  steps
) {

  let target =
    Math.min(
      state.position + steps,
      spaces.length - 1
    );


  for (
    const checkpoint
    of mandatoryCheckpoints
  ) {

    if (
      !checkpointsSeen.has(
        checkpoint
      ) &&
      checkpoint >
        state.position &&
      checkpoint <= target
    ) {

      target =
        checkpoint;

      break;

    }

  }


  return target;

}



/* =========================
   MOVE
========================= */

async function movePlayer(
  steps
) {

  const target =
    getTargetPosition(
      steps
    );


  while (
    state.position < target
  ) {

    await wait(260);


    state.position++;


    spaces[
      state.position
    ]
      .querySelector(
        ".token-zone"
      )
      .appendChild(
        playerToken
      );


    playMoveSound();


    updateUI();


    spaces[
      state.position
    ].scrollIntoView({

      behavior: "smooth",

      block: "center"

    });

  }


  await wait(250);


  resolveSpace();

}



/* =========================
   RESOLVE SPACE
========================= */

function resolveSpace() {

  const space =
    spaces[
      state.position
    ];


  const type =
    space.dataset.type;


  if (
    type === "finish"
  ) {

    showVictory();

    return;
  }


  if (
    type === "checkpoint"
  ) {

    checkpointsSeen.add(
      state.position
    );


    showCheckpoint(
      state.position
    );


    return;
  }


  if (
    type === "question"
  ) {

    const challenge =
      space.dataset
        .challenge === "true";


    showQuestion(
      challenge
    );


    return;
  }


  if (
    type === "event"
  ) {

    showSpecialEvent(
      space.dataset.event
    );


    return;
  }


  finishAction();

}



/* =========================
   CHECKPOINT
========================= */

function showCheckpoint(
  position
) {

  const story =
    checkpointStories[
      position
    ];


  if (!story) {

    finishAction();

    return;
  }


  eventLabel.textContent =
    story.label;


  eventIcon.textContent =
    story.icon;


  eventTitle.textContent =
    story.title;


  eventText.textContent =
    story.text;


  eventContinue.textContent =
    "CONTINUE";


  openModal(
    eventModal
  );


  playEventSound();


  eventContinue.onclick =
    function () {

      eventContinue.onclick =
        null;


      closeModal(
        eventModal
      );


      finishAction();

    };

}



/* =========================
   QUESTION DECK
========================= */

function nextQuestion() {

  if (
    questionDeck.length === 0
  ) {

    questionDeck =
      [...questions];


    shuffle(
      questionDeck
    );

  }


  return questionDeck.pop();

}


function shuffle(array) {

  for (
    let i =
      array.length - 1;
    i > 0;
    i--
  ) {

    const j =
      Math.floor(
        Math.random() *
        (i + 1)
      );


    [
      array[i],
      array[j]
    ] =
    [
      array[j],
      array[i]
    ];

  }

}



/* =========================
   QUESTION
========================= */

function showQuestion(
  challenge = false
) {

  const question =
    nextQuestion();


  const reward =
    challenge
      ? 2
      : 1;


  questionBadge.textContent =
    challenge
      ? "⚡ CHALLENGE QUESTION · 2 STARS"
      : "QUESTION · 1 STAR";


  questionText.textContent =
    question.question;


  answerOptions.innerHTML =
    "";


  questionFeedback
    .textContent =
    "";


  openModal(
    questionModal
  );


  question.answers.forEach(
    function (
      answer,
      index
    ) {

      const button =
        document.createElement(
          "button"
        );


      button.type =
        "button";


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
        function () {

          answerQuestion(
            button,
            index,
            question,
            reward
          );

        }
      );


      answerOptions
        .appendChild(
          button
        );

    }
  );

}



/* =========================
   ANSWER
========================= */

async function answerQuestion(
  button,
  selectedIndex,
  question,
  reward
) {

  const buttons =
    answerOptions
      .querySelectorAll(
        ".answer-option"
      );


  buttons.forEach(
    function (item) {

      item.disabled = true;

    }
  );


  state.answered++;


  if (
    selectedIndex ===
    question.correct
  ) {

    state.correct++;


    state.stars +=
      reward;


    state.streak++;


    state.bestStreak =
      Math.max(
        state.bestStreak,
        state.streak
      );


    button.classList.add(
      "correct"
    );


    questionFeedback
      .textContent =
      reward === 2
        ? "⚡ Correct! +2 Stars"
        : "✅ Correct! +1 Star";


    playCorrectSound();

  }

  else {

    state.hearts =
      Math.max(
        0,
        state.hearts - 1
      );


    state.streak = 0;


    button.classList.add(
      "wrong"
    );


    buttons[
      question.correct
    ].classList.add(
      "correct"
    );


    questionFeedback
      .textContent =
      "❌ Correct answer: " +
      question.answers[
        question.correct
      ];


    playWrongSound();

  }


  updateUI();


  await wait(
    1250
  );


  closeModal(
    questionModal
  );


  finishAction();

}



/* =========================
   SPECIAL EVENT
========================= */

function showSpecialEvent(
  eventKey
) {

  const event =
    events[eventKey];


  if (!event) {

    finishAction();

    return;
  }


  eventLabel.textContent =
    "SPECIAL EVENT";


  eventIcon.textContent =
    event.icon;


  eventTitle.textContent =
    event.title;


  eventText.textContent =
    event.text;


  eventContinue.textContent =
    "CONTINUE";


  openModal(
    eventModal
  );


  playEventSound();


  eventContinue.onclick =
    async function () {

      eventContinue.onclick =
        null;


      closeModal(
        eventModal
      );


      if (
        event.stars
      ) {

        state.stars +=
          event.stars;

      }


      if (
        event.heal
      ) {

        state.hearts =
          Math.min(
            state.maxHearts,
            state.hearts +
            event.heal
          );

      }


      if (
        event.skip
      ) {

        state.skipTurns +=
          event.skip;

      }


      updateUI();


      if (
        event.move
      ) {

        await moveBonus(
          event.move
        );

      }


      finishAction();

    };

}



/* =========================
   BONUS MOVEMENT
========================= */

async function moveBonus(
  amount
) {

  if (
    amount > 0
  ) {

    const target =
      Math.min(
        state.position +
        amount,
        spaces.length - 1
      );


    while (
      state.position <
      target
    ) {

      await wait(250);


      state.position++;


      spaces[
        state.position
      ]
        .querySelector(
          ".token-zone"
        )
        .appendChild(
          playerToken
        );


      playMoveSound();


      updateUI();

    }

  }

  else {

    const target =
      Math.max(
        0,
        state.position +
        amount
      );


    while (
      state.position >
      target
    ) {

      await wait(250);


      state.position--;


      spaces[
        state.position
      ]
        .querySelector(
          ".token-zone"
        )
        .appendChild(
          playerToken
        );


      playMoveSound();


      updateUI();

    }

  }


  spaces[
    state.position
  ].scrollIntoView({

    behavior: "smooth",

    block: "center"

  });

}



/* =========================
   FINISH ACTION
========================= */

function finishAction() {

  state.busy = false;


  rollButton.disabled =
    false;


  diceResult.textContent =
    state.skipTurns > 0
      ? "⚠️ Your next roll will be skipped."
      : "Ready to roll!";


  updateUI();

}



/* =========================
   VICTORY
========================= */

function showVictory() {

  state.gameOver = true;

  state.busy = true;


  rollButton.disabled =
    true;


  const score =
    calculateScore();


  finalName.textContent =
    state.name;


  finalScore.textContent =
    score.toLocaleString();


  finalRank.textContent =
    getRank(
      score
    );


  finalStars.textContent =
    state.stars;


  finalHearts.textContent =
    state.hearts;


  finalCorrect.textContent =
    state.correct +
    " / " +
    state.answered;


  finalBestStreak
    .textContent =
    state.bestStreak;


  finalRolls.textContent =
    state.rolls;


  finalAnswered.textContent =
    state.answered;


  openModal(
    victoryModal
  );


  playVictorySound();


  launchConfetti();

}



/* =========================
   SCORE
========================= */

function calculateScore() {

  const starScore =
    state.stars * 500;


  const correctScore =
    state.correct * 650;


  const streakScore =
    state.bestStreak * 250;


  const heartScore =
    state.hearts * 300;


  const rollBonus =
    Math.max(
      0,
      2500 -
      state.rolls * 100
    );


  return (
    starScore +
    correctScore +
    streakScore +
    heartScore +
    rollBonus
  );

}


function getRank(score) {

  if (
    score >= 8000
  ) {

    return "🏆 Story Expert";

  }


  if (
    score >= 6000
  ) {

    return "⭐ Great Reader";

  }


  if (
    score >= 4000
  ) {

    return "📖 Story Explorer";

  }


  return "🥪 Journey Complete";

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


    gameScreen.classList.add(
      "hidden"
    );


    startScreen.classList.remove(
      "hidden"
    );


    confettiLayer.innerHTML =
      "";


    resetState();

  }
);



/* =========================
   SOUND TOGGLE
========================= */

soundStart.addEventListener(
  "click",
  toggleSound
);


soundGame.addEventListener(
  "click",
  toggleSound
);


function toggleSound() {

  state.sound =
    !state.sound;


  updateSoundButtons();


  if (
    state.sound
  ) {

    ensureAudio();


    playTone(
      520,
      0.07
    );

  }

}


function updateSoundButtons() {

  soundStart.textContent =
    state.sound
      ? "🔊 Sound On"
      : "🔇 Sound Off";


  soundGame.textContent =
    state.sound
      ? "🔊"
      : "🔇";

}


updateSoundButtons();



/* =========================
   AUDIO
========================= */

let audioContext = null;


function ensureAudio() {

  if (
    !state.sound
  ) {

    return;

  }


  if (
    !audioContext
  ) {

    const AudioContext =
      window.AudioContext ||
      window.webkitAudioContext;


    if (
      AudioContext
    ) {

      audioContext =
        new AudioContext();

    }

  }


  if (
    audioContext &&
    audioContext.state ===
      "suspended"
  ) {

    audioContext.resume();

  }

}


function playTone(
  frequency,
  duration,
  type = "sine",
  volume = 0.035
) {

  if (
    !state.sound
  ) {

    return;

  }


  ensureAudio();


  if (
    !audioContext
  ) {

    return;

  }


  const oscillator =
    audioContext
      .createOscillator();


  const gain =
    audioContext
      .createGain();


  oscillator.type =
    type;


  oscillator.frequency.value =
    frequency;


  gain.gain.value =
    volume;


  oscillator.connect(
    gain
  );


  gain.connect(
    audioContext.destination
  );


  oscillator.start();


  gain.gain.exponentialRampToValueAtTime(
    0.0001,
    audioContext.currentTime +
    duration
  );


  oscillator.stop(
    audioContext.currentTime +
    duration
  );

}


function playRollSound() {

  playTone(
    240,
    0.08,
    "square",
    .018
  );

}


function playMoveSound() {

  playTone(
    430 +
      state.position * 4,
    0.05,
    "sine",
    .022
  );

}


function playCorrectSound() {

  playTone(
    600,
    0.12
  );


  setTimeout(
    function () {

      playTone(
        780,
        0.14
      );

    },
    90
  );

}


function playWrongSound() {

  playTone(
    190,
    0.22,
    "sawtooth",
    .025
  );

}


function playLowTone() {

  playTone(
    170,
    0.15,
    "sine",
    .03
  );

}


function playEventSound() {

  playTone(
    500,
    0.08
  );


  setTimeout(
    function () {

      playTone(
        650,
        0.09
      );

    },
    80
  );

}


function playVictorySound() {

  const notes = [
    523,
    659,
    784,
    1047
  ];


  notes.forEach(
    function (
      frequency,
      index
    ) {

      setTimeout(
        function () {

          playTone(
            frequency,
            0.22,
            "sine",
            .035
          );

        },
        index * 140
      );

    }
  );

}



/* =========================
   CONFETTI
========================= */

function launchConfetti() {

  confettiLayer.innerHTML =
    "";


  const colors = [
    "#dfb64e",
    "#6d9fdc",
    "#63a66a",
    "#ca6c68",
    "#9279c1"
  ];


  for (
    let i = 0;
    i < 90;
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
      (
        2 +
        Math.random() *
        2
      ) +
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
    5200
  );

}



/* =========================
   MODALS
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
