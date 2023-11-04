const menuButton = document.getElementById("menuButton");
const menuContent = document.getElementById("menuContent");

menuButton.addEventListener("click", function () {
  if (
    menuContent.style.display === "none" ||
    menuContent.style.display === ""
  ) {
    menuContent.style.display = "block";
  } else {
    menuContent.style.display = "none";
  }
});

const PButton = document.getElementById("PButton");
const PContent = document.getElementById("PContent");

const menuButton1 = document.getElementById("menuButton");
const menuContent1 = document.getElementById("menuContent");

menuButton1.addEventListener("click", function () {
  if (
    menuContent1.style.display === "none" ||
    menuContent1.style.display === ""
  ) {
    menuContent1.style.display = "block";
  } else {
    menuContent1.style.display = "none";
  }
});

const bar = document.querySelector(".bar");
const loadingBarFront = document.querySelector(".loadingBarFront");

let number = 0;

updateNumber();

function updateNumber() {
  bar.textContent = number + "%";
  loadingBarFront.style.width = number + "%";
  number++;

  if (number < 101) {
    setTimeout(updateNumber, 30);
  }
}

const bar1 = document.querySelector(".bar1");
const front1 = document.querySelector(".front1");

let number1 = 0;

updateNumber1();

function updateNumber1() {
  bar1.textContent = number1 + "%";
  front1.style.width = number1 + "%";
  number1++;

  if (number1 < 71) {
    setTimeout(updateNumber1, 30);
  }
}

const bar2 = document.querySelector(".bar2");
const front2 = document.querySelector(".front2");

let number2 = 0;

updateNumber2();

function updateNumber2() {
  bar2.textContent = number2 + "%";
  front2.style.width = number2 + "%";
  number2++;

  if (number2 < 51) {
    setTimeout(updateNumber2, 30);
  }
}

const bar3 = document.querySelector(".bar3");
const front3 = document.querySelector(".front3");

let number3 = 0;

updateNumber3();

function updateNumber3() {
  bar3.textContent = number3 + "%";
  front3.style.width = number3 + "%";
  number3++;

  if (number3 < 0) {
    setTimeout(updateNumber3, 30);
  }
}