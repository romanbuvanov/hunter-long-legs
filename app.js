const clickBtnPlus = document.querySelector("#plus");
const clickBtnMinus = document.querySelector("#minus");
const counter = document.querySelector(".counter");
// console.log("clickBtn"), clickBtn;
let counterNumber = 0;

clickBtnPlus.addEventListener("click", function () {
  //   counterNumber++;
  counterNumber = counterNumber + 1;
  counter.style.color = "#92113c";
  counter.textContent = counterNumber;
  return counterNumber;
});

clickBtnMinus.addEventListener("click", function () {
  //   counterNumber++;
  counterNumber = counterNumber - 1;
  counter.style.color = "#92113c";
  counter.textContent = counterNumber;
  return counterNumber;
});
