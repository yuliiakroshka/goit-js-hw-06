const counterValue = document.querySelector("#counter");
const decrButton = document.querySelector('button[data-action="decrement"]');
const incrButton = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");
let counter = 0;
// const handleClick = (event) => {
//     counterValue -= 1;
// };
decrButton.addEventListener("click", () => {
    counter -= 1;
    value.textContent = counter;
});
incrButton.addEventListener("click", () => {
    counter += 1;
    value.textContent = counter;
})
console.log(counterValue);