const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");
const item = document.createElement("li");
console.log(item);
const markup = ingredients.map((ingredient) => `<li class = "item">${ingredient}</li>`).join("");
console.log(markup);
// ul#ingredients.append(markup);
list.innerHTML = markup;  

