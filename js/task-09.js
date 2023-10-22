const body = document.querySelector("body");
const spanText = document.querySelector(".color");
const button = document.querySelector(".change-color");
button.addEventListener("click", changeColor);
function changeColor() {
   const color = getRandomHexColor();
  body.style.backgroundColor = `${color}`;
  spanText.textContent = color;
  };

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
