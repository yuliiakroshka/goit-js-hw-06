const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const item = document.createElement("li");
console.log(item);
const list = document.querySelector(".list");
const markup = ingredients.map((ingredient) => `<li class = "item">${ingredient}</li>`).join("");
console.log(markup);
list.innerHTML = markup;
