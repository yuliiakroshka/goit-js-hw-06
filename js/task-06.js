const textInput = document.querySelector("#validation-input");
textInput.addEventListener("blur", checkLength);
function checkLength(event) {
    const expectedLength = Number(textInput.dataset.length);
    const currentLength = textInput.value.length;
    if (currentLength === expectedLength) {
        textInput.classList.remove("invalid");
        textInput.classList.add("valid")
    } else {
        textInput.classList.remove("valid");
        textInput.classList.add("invalid")
    }
};
    

