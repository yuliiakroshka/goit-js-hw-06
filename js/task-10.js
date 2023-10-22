function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const numberEl = document.querySelector("input");
const numberBoxes = document.querySelector("#boxes");
createButton.addEventListener("click", createBoxes);
function createBoxes() {
  const elements = [];
  for (let i = 0; i < numberEl.value; i += 1) {
    const createDiv = document.createElement("div");
    console.log(createDiv);
    createDiv.style.width = 30 + 10 * i + "px";
    createDiv.style.height = 30 + 10 * i + "px";
    createDiv.style.backgroundColor = getRandomHexColor();
    elements.push(createDiv);
  };
  return numberBoxes.append(...elements);
};
destroyButton.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  numberEl.value = "";
  return numberBoxes.innerHTML = "";
};
numberBoxes.style.display = "flex";
numberBoxes.style.flexWrap = "wrap";
numberBoxes.style.gap = "40px";
