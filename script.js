* {
  box-sizing: border-box;
}


:root {
  --brown-dark: #3f291b;
  --brown: #795035;
  --brown-light: #c99b69;

  --cream: #fff9ec;
  --paper: #fffdf8;

  --blue: #6e9fda;
  --green: #67a96c;
  --red: #c96c68;
  --gold: #ddb54d;
  --purple: #937ac0;

  --text: #3f332b;
}


body {
  margin: 0;

  min-height: 100vh;

  padding: 18px;

  font-family:
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Arial,
    sans-serif;

  color: var(--text);

  background:
    radial-gradient(
      circle at 15% 15%,
      rgba(255,255,255,.7),
      transparent 30%
    ),
    linear-gradient(
      145deg,
      #f7dfb4,
      #deb37d
    );
}


button,
input,
select {
  font: inherit;
}


button {
  cursor: pointer;
}


.screen-hidden {
  display: none !important;
}



/* =========================
   START SCREEN
========================= */

.start-screen {
  width: 100%;

  max-width: 520px;

  margin: 35px auto;

  padding: 38px 25px;

  text-align: center;

  border: 5px solid var(--brown-dark);

  border-radius: 32px;

  background:
    linear-gradient(
      150deg,
      #fffdf7,
      #fff3d8
    );

  box-shadow:
    0 20px 45px rgba(72,45,27,.28);
}


.book-label {
  font-size: 11px;

  font-weight: 800;

  letter-spacing: 3px;

  color: #96775f;
}


.start-logo {
  margin: 12px 0 4px;

  font-size: 84px;

  animation: floatLogo 2s ease-in-out infinite;
}


.start-title {
  margin: 0;

  color: var(--brown-dark);

  font-size: 42px;
}


.start-subtitle {
  margin: 5px 0 0;

  color: #96603b;

  font-size: 22px;
}


.start-description {
  margin: 20px auto;

  max-width: 340px;

  color: #746257;

  line-height: 1.5;
}


.setup-card {
  margin-top: 22px;

  padding: 20px;

  border: 2px solid #dfc6a2;

  border-radius: 22px;

  background: rgba(255,255,255,.72);
}


.setup-card label {
  display: block;

  margin-bottom: 7px;

  text-align: left;

  font-size: 13px;

  font-weight: 800;

  color: #73553f;
}


#playerCount {
  width: 100%;

  min-height: 48px;

  padding: 0 12px;

  border: 2px solid #d5b38d;

  border-radius: 12px;

  background: white;

  font-size: 16px;
}


.name-fields {
  margin-top: 15px;
}


.name-row {
  display: flex;

  align-items: center;

  gap: 10px;

  margin: 10px 0;
}


.setup-token {
  width: 36px;

  font-size: 25px;
}


.name-row input {
  width: 100%;

  min-width: 0;

  min-height: 46px;

  padding: 0 13px;

  border: 2px solid #dfd2c3;

  border-radius: 12px;

  background: white;

  font-size: 16px;
}


#startButton {
  width: 100%;

  min-height: 58px;

  margin-top: 16px;

  border: none;

  border-radius: 17px;

  background:
    linear-gradient(
      #94603b,
      #5d3923
    );

  color: white;

  font-size: 19px;

  font-weight: 900;

  box-shadow:
    0 6px 0 #3d2517;

  transition: .12s;
}


#startButton:active {
  transform: translateY(5px);

  box-shadow:
    0 1px 0 #3d2517;
}


@keyframes floatLogo {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-8px);
  }

}



/* =========================
   GAME
========================= */

.game-screen {
  width: 100%;

  max-width: 760px;

  margin: auto;
}


.game-header {
  margin-bottom: 15px;

  text-align: center;
}


.header-book {
  font-size: 11px;

  font-weight: 900;

  letter-spacing: 3px;

  color: #866951;
}


.game-header h1 {
  margin: 4px 0;

  font-size: 34px;

  color: var(--brown-dark);
}


.game-header p {
  margin: 5px 0;

  color: #745c4b;
}



/* =========================
   TURN PANEL
========================= */

.turn-panel {
  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 15px;

  margin-bottom: 12px;

  padding: 14px 17px;

  border: 3px solid #c79768;

  border-radius: 18px;

  background: rgba(255,255,255,.88);

  box-shadow:
    0 6px 15px rgba(68,43,27,.1);
}


.turn-small {
  margin-bottom: 2px;

  font-size: 10px;

  font-weight: 900;

  letter-spacing: 2px;

  color: #98785f;
}


#turnName {
  font-size: 20px;

  font-weight: 900;
}


.progress-box {
  text-align: right;
}


#progressText {
  font-size: 19px;

  font-weight: 900;
}



/* =========================
   SCOREBOARD
========================= */

.score-board {
  display: grid;

  grid-template-columns:
    repeat(2, minmax(0, 1fr));

  gap: 8px;

  margin-bottom: 14px;
}


.player-score {
  display: flex;

  align-items: center;

  gap: 8px;

  min-width: 0;

  padding: 9px 11px;

  border: 2px solid rgba(0,0,0,.1);

  border-radius: 13px;

  background: rgba(255,255,255,.75);

  transition: .2s;
}


.player-score.current-player {
  border-color: #b57946;

  background: white;

  box-shadow:
    0 0 0 3px rgba(181,121,70,.15);
}


.score-token {
  flex: 0 0 auto;

  font-size: 20px;
}


.score-name {
  min-width: 0;

  flex: 1;

  overflow: hidden;

  text-overflow: ellipsis;

  white-space: nowrap;

  font-size: 13px;

  font-weight: 800;
}


.score-stars {
  flex: 0 0 auto;

  font-size: 12px;

  font-weight: 900;
}



/* =========================
   BOARD
========================= */

#board {
  display: grid;

  grid-template-columns:
    repeat(4, minmax(0, 1fr));

  gap: 10px;

  padding: 17px;

  border: 6px solid #4b301f;

  border-radius: 30px;

  background:
    radial-gradient(
      circle at 30% 30%,
      rgba(255,255,255,.08),
      transparent 25%
    ),
    linear-gradient(
      145deg,
      #8d5e3d,
      #61402a
    );

  box-shadow:
    inset 0 0 22px rgba(0,0,0,.28),
    0 12px 28px rgba(68,43,27,.22);
}



/* SNAKE ROUTE */

.space:nth-child(1)  { grid-column: 1; grid-row: 1; }
.space:nth-child(2)  { grid-column: 2; grid-row: 1; }
.space:nth-child(3)  { grid-column: 3; grid-row: 1; }
.space:nth-child(4)  { grid-column: 4; grid-row: 1; }

.space:nth-child(5)  { grid-column: 4; grid-row: 2; }
.space:nth-child(6)  { grid-column: 3; grid-row: 2; }
.space:nth-child(7)  { grid-column: 2; grid-row: 2; }
.space:nth-child(8)  { grid-column: 1; grid-row: 2; }

.space:nth-child(9)  { grid-column: 1; grid-row: 3; }
.space:nth-child(10) { grid-column: 2; grid-row: 3; }
.space:nth-child(11) { grid-column: 3; grid-row: 3; }
.space:nth-child(12) { grid-column: 4; grid-row: 3; }

.space:nth-child(13) { grid-column: 4; grid-row: 4; }
.space:nth-child(14) { grid-column: 3; grid-row: 4; }
.space:nth-child(15) { grid-column: 2; grid-row: 4; }
.space:nth-child(16) { grid-column: 1; grid-row: 4; }

.space:nth-child(17) { grid-column: 1; grid-row: 5; }
.space:nth-child(18) { grid-column: 2; grid-row: 5; }
.space:nth-child(19) { grid-column: 3; grid-row: 5; }
.space:nth-child(20) { grid-column: 4; grid-row: 5; }



.space {
  position: relative;

  min-width: 0;

  aspect-ratio: 1 / 1;

  padding: 6px;

  border: 4px solid #ddd4c5;

  border-radius: 50%;

  background: #fffdf7;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  text-align: center;

  font-size: 11px;

  font-weight: 900;

  box-shadow:
    0 5px 0 rgba(64,45,32,.25),
    0 8px 10px rgba(0,0,0,.15);

  transition:
    transform .2s,
    box-shadow .2s;
}


.space small {
  margin-top: 2px;

  font-size: 8px;

  font-weight: 700;

  color: #756b63;
}


.space-icon {
  margin-bottom: 2px;

  font-size: 24px;
}


.start-space {
  border-color: #67a66d;

  background: #dcf2d8;
}


.question-space {
  border-color: var(--blue);

  background: #dfedff;
}


.event-space {
  border-color: var(--gold);

  background: #fff1bc;
}


.school-space {
  border-color: #6da6b1;

  background: #d9eef1;
}


.danger-space {
  border-color: var(--red);

  background: #f5dada;
}


.bonus-space {
  border-color: var(--purple);

  background: #eee3ff;
}


.finish-space {
  border-color: #4f9e5c;

  background: #d5f2d7;

  animation:
    finishGlow 1.4s ease-in-out infinite;
}


.active-space {
  z-index: 3;

  transform: scale(1.08);

  box-shadow:
    0 0 0 4px rgba(255,255,255,.8),
    0 0 23px rgba(255,213,92,.95);
}


@keyframes finishGlow {

  0%,
  100% {
    box-shadow:
      0 5px 0 rgba(64,45,32,.25),
      0 0 8px rgba(79,158,92,.25);
  }

  50% {
    box-shadow:
      0 5px 0 rgba(64,45,32,.25),
      0 0 22px rgba(79,158,92,.8);
  }

}



/* =========================
   PLAYER TOKENS
========================= */

.token-zone {
  position: absolute;

  right: -5px;

  bottom: -6px;

  display: flex;

  flex-wrap: wrap;

  justify-content: flex-end;

  width: 48px;
}


.player-token {
  width: 22px;

  height: 22px;

  margin: -2px;

  display: flex;

  align-items: center;

  justify-content: center;

  border: 2px solid white;

  border-radius: 50%;

  background: rgba(255,255,255,.95);

  font-size: 15px;

  box-shadow:
    0 2px 5px rgba(0,0,0,.35);
}



/* =========================
   DICE
========================= */

.dice-panel {
  margin-top: 16px;

  padding: 20px;

  text-align: center;

  border: 3px solid #c59668;

  border-radius: 24px;

  background: rgba(255,255,255,.92);

  box-shadow:
    0 8px 18px rgba(68,43,27,.13);
}


#diceVisual {
  height: 70px;

  line-height: 70px;

  font-size: 65px;

  color: var(--brown-dark);
}


#diceVisual.rolling {
  animation:
    diceShake .12s linear infinite;
}


@keyframes diceShake {

  0% {
    transform:
      rotate(-8deg)
      scale(.95);
  }

  50% {
    transform:
      rotate(8deg)
      scale(1.08);
  }

  100% {
    transform:
      rotate(-8deg)
      scale(.95);
  }

}


#diceResult {
  min-height: 28px;

  margin: 6px 0 14px;

  font-size: 17px;

  font-weight: 800;
}


#rollButton {
  width: 100%;

  min-height: 58px;

  border: none;

  border-radius: 17px;

  background:
    linear-gradient(
      #94603b,
      #5d3923
    );

  color: white;

  font-size: 20px;

  font-weight: 900;

  box-shadow:
    0 6px 0 #3d2517;

  transition: .12s;
}


#rollButton:active:not(:disabled) {
  transform: translateY(5px);

  box-shadow:
    0 1px 0 #3d2517;
}


#rollButton:disabled {
  opacity: .5;

  cursor: default;
}



/* =========================
   MODALS
========================= */

.modal {
  display: none;

  position: fixed;

  z-index: 1000;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  padding: 18px;

  align-items: center;

  justify-content: center;

  background:
    rgba(35,24,18,.75);
}


.modal.open {
  display: flex;
}


.modal-card {
  width: 100%;

  max-width: 440px;

  max-height: 90vh;

  overflow-y: auto;

  padding: 28px 23px;

  text-align: center;

  border-radius: 27px;

  background: var(--paper);

  box-shadow:
    0 22px 55px rgba(0,0,0,.4);

  animation:
    modalPop .25s ease;
}


@keyframes modalPop {

  from {
    opacity: 0;

    transform: scale(.82);
  }

  to {
    opacity: 1;

    transform: scale(1);
  }

}


.modal-icon {
  font-size: 50px;
}


.modal-label {
  margin-top: 5px;

  font-size: 10px;

  font-weight: 900;

  letter-spacing: 3px;

  color: #92745d;
}


.question-card {
  border: 5px solid var(--blue);
}


.question-card h2 {
  margin: 12px 0 20px;

  line-height: 1.35;

  font-size: 21px;
}


.answer-option {
  width: 100%;

  min-height: 52px;

  margin: 9px 0;

  padding: 11px;

  text-align: left;

  border: 2px solid #d9d9d9;

  border-radius: 14px;

  background: white;

  color: #37312e;

  font-size: 15px;

  font-weight: 700;

  transition: .15s;
}


.answer-option:active:not(:disabled) {
  transform: scale(.98);
}


.answer-option.correct-answer {
  border-color: #65a96b;

  background: #dcf2df;
}


.answer-option.wrong-answer {
  border-color: #c96c68;

  background: #f7dddd;
}


.answer-option:disabled {
  cursor: default;
}


.feedback {
  min-height: 26px;

  margin-top: 12px;

  font-size: 17px;

  font-weight: 900;
}



/* EVENT */

.event-card {
  border: 5px solid var(--gold);
}


.event-big-icon {
  font-size: 68px;
}


.event-card h2 {
  margin: 10px 0;

  font-size: 27px;
}


.event-card p {
  line-height: 1.5;

  font-size: 17px;
}


#eventContinue {
  width: 100%;

  min-height: 52px;

  margin-top: 13px;

  border: none;

  border-radius: 15px;

  background: var(--brown);

  color: white;

  font-size: 17px;

  font-weight: 900;

  box-shadow:
    0 5px 0 var(--brown-dark);
}



/* VICTORY */

.victory-card {
  border: 6px solid var(--green);

  background:
    linear-gradient(
      #fffdf4,
      #eef9ec
    );
}


.victory-icon {
  font-size: 75px;
}


.victory-small {
  font-size: 10px;

  font-weight: 900;

  letter-spacing: 3px;

  color: #6c906e;
}


.victory-card h1 {
  margin: 5px 0;

  color: #438149;

  font-size: 42px;
}


.victory-card h2 {
  margin: 5px 0;

  color: var(--brown-dark);
}


.winner-stars {
  display: inline-block;

  margin-top: 10px;

  padding: 9px 15px;

  border-radius: 20px;

  background: #fff1b8;

  font-size: 17px;
}


.story-ending {
  margin-top: 20px;

  color: #765d4c;

  font-style: italic;
}


#restartButton {
  width: 100%;

  min-height: 55px;

  margin-top: 15px;

  border: none;

  border-radius: 16px;

  background: #5d9a62;

  color: white;

  font-size: 18px;

  font-weight: 900;

  box-shadow:
    0 5px 0 #376d3c;
}



/* =========================
   CONFETTI
========================= */

.confetti-layer {
  position: fixed;

  z-index: 2000;

  top: 0;
  left: 0;

  width: 100%;

  pointer-events: none;
}


.confetti {
  position: absolute;

  top: -20px;

  width: 10px;

  height: 16px;

  border-radius: 2px;

  animation:
    confettiFall 2.8s linear forwards;
}


@keyframes confettiFall {

  0% {
    opacity: 1;

    transform:
      translateY(0)
      rotate(0);
  }

  100% {
    opacity: 0;

    transform:
      translateY(100vh)
      rotate(720deg);
  }

}



/* =========================
   MOBILE
========================= */

@media (max-width: 520px) {

  body {
    padding: 9px;
  }


  .start-screen {
    margin: 14px auto;

    padding: 28px 16px;
  }


  .start-logo {
    font-size: 67px;
  }


  .start-title {
    font-size: 32px;
  }


  .start-subtitle {
    font-size: 19px;
  }


  .game-header h1 {
    font-size: 27px;
  }


  #board {
    gap: 6px;

    padding: 10px;

    border-width: 5px;

    border-radius: 22px;
  }


  .space {
    padding: 3px;

    border-width: 3px;

    font-size: 9px;
  }


  .space-icon {
    font-size: 19px;
  }


  .space small {
    font-size: 7px;
  }


  .player-token {
    width: 19px;

    height: 19px;

    font-size: 12px;
  }


  .token-zone {
    width: 40px;
  }


  .turn-panel {
    padding: 11px 12px;
  }


  #turnName {
    font-size: 17px;
  }


  #progressText {
    font-size: 16px;
  }


  #diceVisual {
    height: 58px;

    line-height: 58px;

    font-size: 54px;
  }

}
