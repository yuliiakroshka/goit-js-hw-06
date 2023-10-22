const spanText = document.querySelector("#text");
const inputFontSize = document.querySelector("#font-size-control");
inputFontSize.addEventListener("input", () => {
    const textSize = inputFontSize.value;
    spanText.style.fontSize = `${textSize}px`
});