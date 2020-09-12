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

const SHOWING_CL = "showing";
const SHOW = "show";
const DOWN = "down";
const HINT = "hint";
const list_num = [];

function listPlus(prop) {
  list_num.push(prop);
  didNum.innerText = list_num.length + "회";
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
    userNum.value = "";
  });
}

init();
