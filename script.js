/* =========================================
   A RICE SANDWICH
   ESPERANZA'S JOURNEY
========================================= */


/* =========================================
   ELEMENTS
========================================= */

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



/* =========================================
   STATE
========================================= */

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



/* =========================================
   QUESTION BANK
========================================= */

const questions = [

  {
    question:
      "Why does Esperanza want to eat in the canteen?",

    answers: [
      "She wants to feel like the special kids.",
      "She wants to skip class.",
      "She does not like eating at home.",
      "She wants to meet her teacher."
    ],

    correct: 0
  },


  {
    question:
      "What kind of sandwich does Esperanza bring to school?",

    answers: [
      "A ham sandwich.",
      "A rice sandwich.",
      "A chicken sandwich.",
      "A cheese sandwich."
    ],

    correct: 1
  },


  {
    question:
      "Who writes the letter for Esperanza?",

    answers: [
      "Her mother.",
      "Her teacher.",
      "Nenny.",
      "Sister Superior."
    ],

    correct: 0
  },


  {
    question:
      "Who stops Esperanza before she enters the canteen?",

    answers: [
      "A nun.",
      "Her mother.",
      "Her teacher.",
      "Nenny."
    ],

    correct: 0
  },


  {
    question:
      "Where does the nun send Esperanza?",

    answers: [
      "Back home.",
      "To Sister Superior.",
      "To the playground.",
      "To her classroom."
    ],

    correct: 1
  },


  {
    question:
      "What does Sister Superior ask Esperanza to point out?",

    answers: [
      "Her classroom.",
      "Her house.",
      "The canteen.",
      "Her mother's car."
    ],

    correct: 1
  },


  {
    question:
      "How does Esperanza react when Sister Superior questions her?",

    answers: [
      "She laughs.",
      "She cries.",
      "She becomes angry.",
      "She walks away."
    ],

    correct: 1
  },


  {
    question:
      "What does Esperanza ask for after she begins crying?",

    answers: [
      "A Kleenex.",
      "A new sandwich.",
      "A pencil.",
      "A glass of milk."
    ],

    correct: 0
  },


  {
    question:
      "How long is Esperanza allowed to eat in the canteen?",

    answers: [
      "Only for that day.",
      "Every day.",
      "For one month.",
      "For the rest of the school year."
    ],

    correct: 0
  },


  {
    question:
      "How does Esperanza feel about the canteen at the end?",

    answers: [
      "She thinks it is amazing.",
      "She realizes it is nothing special.",
      "She wants to stay there all day.",
      "She thinks it is better than home."
    ],

    correct: 1
  },


  {
    question:
      "Why does Esperanza nod at the wrong house?",

    answers: [
      "She feels nervous and pressured.",
      "She forgets where she lives.",
      "She wants to live in that house.",
      "She is playing a joke."
    ],

    correct: 0
  },


  {
    question:
      "What is the rice like when Esperanza finally eats it?",

    answers: [
      "Hot.",
      "Cold.",
      "Sweet.",
      "Spicy."
    ],

    correct: 1
  },


  {
    question:
      "Why does Esperanza's mother refuse at first to let her eat in the canteen?",

    answers: [
      "She thinks Esperanza is too young.",
      "She does not want the extra work of preparing special bag lunches.",
      "She does not trust the school.",
      "She wants Esperanza to buy lunch."
    ],

    correct: 1
  },


  {
    question:
      "What happens when Esperanza first tries to eat in the canteen?",

    answers: [
      "The nun does not recognize her and sends her to Sister Superior.",
      "She sits down and eats immediately.",
      "Her mother comes to take her home.",
      "Her friends give her permission."
    ],

    correct: 0
  },


  {
    question:
      "Why does Esperanza cry in Sister Superior's office?",

    answers: [
      "She loses her sandwich.",
      "She feels embarrassed and pressured by questions about her home.",
      "She is angry because school is over.",
      "She wants to see Nenny."
    ],

    correct: 1
  },


  {
    question:
      "Why does Esperanza say that the wrong house is hers?",

    answers: [
      "She wants to buy the house.",
      "She feels nervous and wants to escape the uncomfortable situation.",
      "She cannot remember where she lives.",
      "She wants Sister Superior to visit it."
    ],

    correct: 1
  },


  {
    question:
      "What does the rice sandwich symbolize?",

    answers: [
      "Esperanza's family's limited money and her feeling different from others.",
      "Esperanza's favorite meal.",
      "Her mother's cooking skills.",
      "A reward for doing well in school."
    ],

    correct: 0
  },


  {
    question:
      "What does Esperanza realize after finally eating in the canteen?",

    answers: [
      "The canteen is more exciting than she expected.",
      "The canteen is not as special as she imagined.",
      "She wants to eat there every day.",
      "She wants to work in the canteen."
    ],

    correct: 1
  },


  {
    question:
      "Why are the 'special kids' allowed to eat in the canteen?",

    answers: [
      "Their mothers are not home or they live too far away.",
      "They have the highest grades.",
      "They are older students.",
      "They pay extra money."
    ],

    correct: 0
  },


  {
    question:
      "What does Esperanza's mother say the children like to invent for her?",

    answers: [
      "More homework.",
      "More work.",
      "More school rules.",
      "More games."
    ],

    correct: 1
  },


  {
    question:
      "What does Esperanza's mother imagine she would have to do for bag lunches?",

    answers: [
      "Cook rice every morning.",
      "Cut bread into little triangles and prepare different sandwiches.",
      "Buy lunch from school.",
      "Wake Esperanza up earlier."
    ],

    correct: 1
  },


  {
    question:
      "Why does Nenny not want to eat at school?",

    answers: [
      "She likes going home with Gloria.",
      "She dislikes school food.",
      "She is afraid of the nuns.",
      "She does not eat lunch."
    ],

    correct: 0
  },


  {
    question:
      "What do Nenny and Gloria usually do at Gloria's house?",

    answers: [
      "Study together.",
      "Watch cartoons.",
      "Cook lunch.",
      "Play basketball."
    ],

    correct: 1
  },


  {
    question:
      "Why do Kiki and Carlos like standing outside in the cold?",

    answers: [
      "They want to miss class.",
      "They think suffering is good for them.",
      "They are waiting for their mother.",
      "They do not have a classroom."
    ],

    correct: 1
  },


  {
    question:
      "What movie influences Kiki and Carlos's idea about suffering?",

    answers: [
      "300 Spartans.",
      "Rocky.",
      "Superman.",
      "Star Wars."
    ],

    correct: 0
  },


  {
    question:
      "Why does Esperanza say she is 'no Spartan'?",

    answers: [
      "She does not like movies.",
      "She says she is physically weak and gets dizzy easily.",
      "She wants to stay inside.",
      "She does not know Kiki and Carlos."
    ],

    correct: 1
  },


  {
    question:
      "What does Esperanza say would happen if she ate lunch at school?",

    answers: [
      "There would be fewer dishes to wash.",
      "Her mother would have more dishes.",
      "She would miss class.",
      "She would have to cook dinner."
    ],

    correct: 0
  },


  {
    question:
      "What time does Esperanza say she would finally come home?",

    answers: [
      "12 p.m.",
      "1 p.m.",
      "3 p.m.",
      "5 p.m."
    ],

    correct: 2
  },


  {
    question:
      "How long does Esperanza keep asking her mother before she agrees?",

    answers: [
      "One day.",
      "Two days.",
      "Three days.",
      "One week."
    ],

    correct: 2
  },


  {
    question:
      "Why is Esperanza's lunch a rice sandwich?",

    answers: [
      "Rice is her favorite food.",
      "Her family does not have lunch meat.",
      "The school requires rice.",
      "Her mother forgot to buy bread."
    ],

    correct: 1
  },


  {
    question:
      "Who knows all the canteen kids by heart?",

    answers: [
      "Esperanza's teacher.",
      "The nun.",
      "Esperanza's mother.",
      "Nenny."
    ],

    correct: 1
  },


  {
    question:
      "What does Esperanza do when the nun asks who sent her?",

    answers: [
      "She argues.",
      "She silently holds out the letter.",
      "She runs away.",
      "She calls her mother."
    ],

    correct: 1
  },


  {
    question:
      "Why does Esperanza have to see Sister Superior?",

    answers: [
      "The nun says Sister Superior must approve the letter.",
      "Esperanza is late for class.",
      "Her teacher wants to punish her.",
      "She lost her sandwich."
    ],

    correct: 0
  },


  {
    question:
      "What happens to the two children waiting before Esperanza?",

    answers: [
      "They receive awards.",
      "They are hollered at.",
      "They are sent home.",
      "They eat lunch."
    ],

    correct: 1
  },


  {
    question:
      "What is under the glass on Sister Superior's desk?",

    answers: [
      "Family photographs.",
      "Holy pictures.",
      "Student grades.",
      "Lunch menus."
    ],

    correct: 1
  },


  {
    question:
      "What reason does Esperanza's mother give in the letter?",

    answers: [
      "Esperanza lives too far away and gets tired.",
      "Esperanza has a job.",
      "Esperanza dislikes eating at home.",
      "Esperanza needs more study time."
    ],

    correct: 0
  },


  {
    question:
      "How does Esperanza's mother describe her in the letter?",

    answers: [
      "Very tall.",
      "Very skinny.",
      "Very strong.",
      "Very loud."
    ],

    correct: 1
  },


  {
    question:
      "About how far does Sister Superior say Esperanza lives from school?",

    answers: [
      "About three long blocks.",
      "Ten blocks.",
      "One mile.",
      "Across the street."
    ],

    correct: 0
  },


  {
    question:
      "What kind of buildings does Sister Superior point toward?",

    answers: [
      "Large new houses.",
      "A row of ugly three-flats.",
      "School apartments.",
      "Expensive hotels."
    ],

    correct: 1
  },


  {
    question:
      "What does Sister Superior do after Esperanza begins crying?",

    answers: [
      "She sends Esperanza home immediately.",
      "She feels sorry and lets Esperanza stay for the day.",
      "She calls Esperanza's mother.",
      "She takes away the sandwich."
    ],

    correct: 1
  },


  {
    question:
      "How is the bread when Esperanza finally eats her sandwich?",

    answers: [
      "Fresh.",
      "Greasy.",
      "Burned.",
      "Frozen."
    ],

    correct: 1
  },


  {
    question:
      "What are the other boys and girls doing while Esperanza eats?",

    answers: [
      "They ignore her.",
      "They watch her while she cries.",
      "They leave the canteen.",
      "They give her food."
    ],

    correct: 1
  },


  {
    question:
      "Which theme is connected to Esperanza wanting to eat in the canteen?",

    answers: [
      "Belonging and wanting to fit in.",
      "Winning a competition.",
      "Learning how to cook.",
      "Becoming a teacher."
    ],

    correct: 0
  },


  {
    question:
      "What does the rice sandwich reveal about Esperanza's family?",

    answers: [
      "They are wealthy.",
      "They sometimes have limited money and food choices.",
      "They own a restaurant.",
      "They only eat rice."
    ],

    correct: 1
  },


  {
    question:
      "Why is the ending ironic?",

    answers: [
      "Esperanza works hard to enter the canteen, but it turns out to be nothing special.",
      "Esperanza never reaches school.",
      "The canteen becomes her home.",
      "Sister Superior eats her sandwich."
    ],

    correct: 0
  }

];



/* =========================================
   SPECIAL EVENTS
========================================= */

const events = {

  rice: {

    icon: "🥪",

    title:
      "Rice Sandwich",

    text:
      "Your lunch is ready! Earn 1 Star.",

    stars: 1

  },


  letter: {

    icon: "✉️",

    title:
      "Mother's Letter",

    text:
      "Your mother wrote the letter! Move forward 1 extra space.",

    move: 1

  },


  nun: {

    icon: "👩‍🦳",

    title:
      "The Nun",

    text:
      "The nun stops Esperanza. Lose 1 Heart.",

    damage: 1

  },


  cry: {

    icon: "😢",

    title:
      "Crying",

    text:
      "Esperanza feels embarrassed. Lose 1 Star and reset your Streak.",

    loseStars: 1,

    resetStreak: true

  },


  kleenex: {

    icon: "🤧",

    title:
      "Kleenex",

    text:
      "Esperanza feels better. Recover 1 Heart.",

    heal: 1

  },


  permission: {

    icon: "⭐",

    title:
      "Permission Granted",

    text:
      "You may stay in the canteen today! Earn 2 Stars and move forward 1 space.",

    stars: 2,

    move: 1

  }

};



/* =========================================
   CHECKPOINT STORIES
========================================= */

const checkpointStories = {

  7: {

    icon: "🏫",

    label:
      "CHAPTER 2",

    title:
      "The School",

    text:
      "Esperanza arrives at school with her rice sandwich and her mother's letter."

  },


  13: {

    icon: "📚",

    label:
      "CHAPTER 3",

    title:
      "Sister Superior",

    text:
      "Esperanza is sent upstairs to speak with Sister Superior."

  },


  21: {

    icon: "🚪",

    label:
      "CHAPTER 4",

    title:
      "The Canteen",

    text:
      "Esperanza finally receives permission to stay in the canteen for today."

  }

};



/* =========================================
   START
========================================= */

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

}



/* =========================================
   RESET
========================================= */

function resetState() {

  state.position = 0;

  state.hearts = 3;

  state.stars = 0;

  state.streak = 0;

  state.bestStreak = 0;

  state.correct = 0;

  state.answered = 0;

  state.rolls = 0;

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



/* =========================================
   TOKEN
========================================= */

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



/* =========================================
   UI
========================================= */

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


function getChapterName(
  position
) {

  if (
    position <= 6
  ) {

    return "Chapter 1 · Home";

  }


  if (
    position <= 12
  ) {

    return "Chapter 2 · School";

  }


  if (
    position <= 20
  ) {

    return "Chapter 3 · Sister Superior";

  }


  return "Chapter 4 · Canteen";

}



/* =========================================
   DICE
========================================= */

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


  state.busy =
    true;


  rollButton.disabled =
    true;


  state.rolls++;


  updateUI();


  diceVisual.classList.add(
    "rolling"
  );


  playRollSound();


  let animationCount =
    0;


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
          animationCount >= 11
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



/*
Actual movement is 1–3.

The player is NOT told this.

1 = 40%
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



/* =========================================
   CHECKPOINT TARGET
========================================= */

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



/* =========================================
   MOVE
========================================= */

async function movePlayer(
  steps
) {

  const target =
    getTargetPosition(
      steps
    );


  while (
    state.position <
    target
  ) {

    await wait(
      250
    );


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


  await wait(
    250
  );


  resolveSpace();

}



/* =========================================
   RESOLVE SPACE
========================================= */

function resolveSpace() {

  const space =
    spaces[
      state.position
    ];


  const type =
    space.dataset.type;


  /* FINISH */

  if (
    type === "finish"
  ) {

    showVictory();

    return;

  }


  /* CHECKPOINT */

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


  /* QUESTION */

  if (
    type === "question"
  ) {

    const challenge =
      space.dataset
        .challenge ===
      "true";


    showQuestion(
      challenge,
      false
    );


    return;

  }


  /* SPECIAL EVENT */

  if (
    type === "event"
  ) {

    showSpecialEvent(
      space.dataset.event
    );


    return;

  }


  /*
  NORMAL SPACE

  35% chance to receive
  a BONUS QUESTION.
  */

  const chance =
    Math.random();


  if (
    chance < 0.35
  ) {

    showQuestion(
      false,
      true
    );


    return;

  }


  finishAction();

}



/* =========================================
   CHECKPOINT
========================================= */

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


      finishAction(
        "Checkpoint complete. Ready to roll!"
      );

    };

}



/* =========================================
   QUESTION DECK
========================================= */

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


function shuffle(
  array
) {

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



/* =========================================
   QUESTION
========================================= */

function showQuestion(
  challenge = false,
  bonus = false
) {

  const question =
    nextQuestion();


  let reward = 1;


  if (
    challenge
  ) {

    reward = 2;

  }


  if (
    challenge
  ) {

    questionBadge.textContent =
      "⚡ CHALLENGE · +2 STARS";

  }

  else if (
    bonus
  ) {

    questionBadge.textContent =
      "🎲 BONUS QUESTION · +1 STAR";

  }

  else {

    questionBadge.textContent =
      "QUESTION · +1 STAR";

  }


  questionText.textContent =
    question.question;


  answerOptions.innerHTML =
    "";


  questionFeedback.textContent =
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


      answerOptions.appendChild(
        button
      );

    }
  );

}



/* =========================================
   ANSWER
========================================= */

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

      item.disabled =
        true;

    }
  );


  state.answered++;


  /* CORRECT */

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


    questionFeedback.textContent =
      reward === 2
        ? "⚡ Correct! +2 Stars!"
        : "✅ Correct! +1 Star!";


    playCorrectSound();


    updateUI();


    await wait(
      1150
    );


    closeModal(
      questionModal
    );


    finishAction(
      reward === 2
        ? "⚡ +2 Stars! Ready to roll."
        : "⭐ +1 Star! Ready to roll."
    );


    return;

  }


  /* WRONG */

  state.hearts =
    Math.max(
      0,
      state.hearts - 1
    );


  state.streak =
    0;


  button.classList.add(
    "wrong"
  );


  buttons[
    question.correct
  ].classList.add(
    "correct"
  );


  questionFeedback.textContent =
    "❌ Wrong! -1 Heart";


  playWrongSound();


  updateUI();


  await wait(
    1300
  );


  closeModal(
    questionModal
  );


  finishAction(
    "❤️ -1 Heart. Ready to roll."
  );

}



/* =========================================
   SPECIAL EVENT
========================================= */

function showSpecialEvent(
  eventKey
) {

  const event =
    events[
      eventKey
    ];


  if (!event) {

    finishAction();

    return;

  }


  eventLabel.textContent =
    "⚡ SPECIAL EVENT";


  eventIcon.textContent =
    event.icon;


  eventTitle.textContent =
    event.title;


  eventText.textContent =
    event.text;


  eventContinue.textContent =
    "APPLY EFFECT";


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


      let resultMessage =
        "Special Event complete!";


      /* ADD STAR */

      if (
        event.stars
      ) {

        state.stars +=
          event.stars;


        resultMessage =
          "⭐ +" +
          event.stars +
          (
            event.stars === 1
              ? " Star!"
              : " Stars!"
          );


        playCorrectSound();

      }


      /* LOSE STAR */

      if (
        event.loseStars
      ) {

        const oldStars =
          state.stars;


        state.stars =
          Math.max(
            0,
            state.stars -
            event.loseStars
          );


        const lost =
          oldStars -
          state.stars;


        if (
          lost > 0
        ) {

          resultMessage =
            "⭐ -1 Star!";

        }

        else {

          resultMessage =
            "🔥 Streak reset!";

        }


        playWrongSound();

      }


      /* RESET STREAK */

      if (
        event.resetStreak
      ) {

        state.streak =
          0;

      }


      /* DAMAGE */

      if (
        event.damage
      ) {

        state.hearts =
          Math.max(
            0,
            state.hearts -
            event.damage
          );


        resultMessage =
          "❤️ -1 Heart!";


        playWrongSound();

      }


      /* HEAL */

      if (
        event.heal
      ) {

        const oldHearts =
          state.hearts;


        state.hearts =
          Math.min(
            state.maxHearts,
            state.hearts +
            event.heal
          );


        resultMessage =
          state.hearts >
          oldHearts
            ? "❤️ +1 Heart!"
            : "❤️ Hearts already full!";


        playCorrectSound();

      }


      updateUI();


      /* MOVEMENT */

      if (
        event.move
      ) {

        await wait(
          350
        );


        await moveEffect(
          event.move
        );


        /*
        If effect movement lands on
        an important space,
        activate it.
        */

        const newSpace =
          spaces[
            state.position
          ];


        if (
          newSpace.dataset.type ===
          "finish"
        ) {

          showVictory();

          return;

        }


        if (
          newSpace.dataset.type ===
          "checkpoint" &&
          !checkpointsSeen.has(
            state.position
          )
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
          newSpace.dataset.type ===
          "question"
        ) {

          const challenge =
            newSpace.dataset
              .challenge ===
            "true";


          showQuestion(
            challenge,
            false
          );


          return;

        }

      }


      updateUI();


      finishAction(
        resultMessage +
        " Ready to roll."
      );

    };

}



/* =========================================
   EFFECT MOVEMENT
========================================= */

async function moveEffect(
  amount
) {

  const target =
    Math.max(
      0,
      Math.min(
        spaces.length - 1,
        state.position +
        amount
      )
    );


  while (
    state.position !==
    target
  ) {

    await wait(
      260
    );


    if (
      target >
      state.position
    ) {

      state.position++;

    }

    else {

      state.position--;

    }


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



/* =========================================
   FINISH ACTION
========================================= */

function finishAction(
  message =
    "Ready to roll!"
) {

  state.busy =
    false;


  rollButton.disabled =
    false;


  diceResult.textContent =
    message;


  updateUI();

}



/* =========================================
   VICTORY
========================================= */

function showVictory() {

  state.gameOver =
    true;


  state.busy =
    true;


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


  finalBestStreak.textContent =
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



/* =========================================
   SCORE
========================================= */

function calculateScore() {

  const starScore =
    state.stars *
    450;


  const correctScore =
    state.correct *
    550;


  const streakScore =
    state.bestStreak *
    250;


  const heartScore =
    state.hearts *
    400;


  const rollBonus =
    Math.max(
      0,
      2500 -
      state.rolls *
      100
    );


  return (
    starScore +
    correctScore +
    streakScore +
    heartScore +
    rollBonus
  );

}


function getRank(
  score
) {

  if (
    score >= 9000
  ) {

    return "🏆 Story Expert";

  }


  if (
    score >= 6500
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



/* =========================================
   PLAY AGAIN
========================================= */

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



/* =========================================
   SOUND
========================================= */

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



/* =========================================
   AUDIO
========================================= */

let audioContext =
  null;


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


  gain.gain
    .exponentialRampToValueAtTime(
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
      state.position *
      4,
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



/* =========================================
   CONFETTI
========================================= */

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



/* =========================================
   MODALS
========================================= */

function openModal(
  modal
) {

  modal.classList.add(
    "open"
  );

}


function closeModal(
  modal
) {

  modal.classList.remove(
    "open"
  );

}



/* =========================================
   WAIT
========================================= */

function wait(
  milliseconds
) {

  return new Promise(
    function (resolve) {

      setTimeout(
        resolve,
        milliseconds
      );

    }
  );

}
