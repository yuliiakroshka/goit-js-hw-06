const spanText = document.querySelector("#text");
const inputFontSize = document.querySelector("#font-size-control");
inputFontSize.addEventListener("input", (e) => {
    // const textSize = inputFontSize.value;
    // spanText.style.fontSize = `${textSize}px`
    spanText.style.fontSize = `${e.target.value}px`;
});
