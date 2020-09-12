const input__number = document.querySelector(".input"),
  userNum = input__number.querySelector("input"),
  submit = document.querySelector(".submit"),
  list = document.querySelector(".submit__list"),
  count__number = document.querySelector(".count"),
  win = document.querySelector(".win"),
  lose = document.querySelector(".lose"),
  didNum = document.querySelector(".didNum"),
  bigger = document.querySelector(".bigger"),
  lower = document.querySelector(".lower"),
  body = document.querySelector("body");
reset = document.querySelector(".reset");

const SHOWING = "showing";
const SHOW = "show";
const DOWN = "down";
const HINT = "hint";
const list_num = [];

function restartGame() {
  window.location.reload();
}

reset.addEventListener("click", restartGame);

function hint(made, user) {
  lower.classList.remove(HINT);
  bigger.classList.remove(HINT);

  if (made > user) {
    lower.classList.add(HINT);
    if (list_num.length == 10) {
      lower.classList.remove(HINT);
    }
  }
  if (user > made) {
    bigger.classList.add(HINT);
    if (list_num.length == 10) {
      bigger.classList.remove(HINT);
      gameLose();
    }
  }
}

function compareNum(made, user) {
  if (made == user) {
    gameWin();
  }
  if (made !== user) {
    hint(made, user);
  }
}

function gameWin() {
  win.classList.add(SHOWING);
}

function gameLose() {
  lose.classList.add(SHOWING);
}

function gameCount(prop) {
  if (prop > 9) {
    gameLose();
  }
}

function createList(item) {
  const newSpan = document.createElement("span");
  const items = document.createTextNode(`${item}`);
  newSpan.appendChild(items);
  list.appendChild(newSpan);
}

function listPlus(prop) {
  list_num.push(prop);
  createList(prop);
  didNum.innerText = list_num.length;
  gameCount(didNum.innerText);
}

function makeRndNum() {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  return randomNum;
}

function init() {
  const randomNum = makeRndNum();
  console.log(randomNum);

  submit.addEventListener("click", () => {
    const userNumValue = userNum.value;
    listPlus(userNumValue);
    compareNum(randomNum, userNumValue);
    userNum.value = "";
  });
}

init();
