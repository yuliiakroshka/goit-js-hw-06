const items = document.querySelectorAll(".item");
console.log(`Number of categories :${items.length}`);
console.log(" ");
items.forEach((li) => {
    console.log(`Category: ${li.firstElementChild.textContent}`);
    console.log(`Elements: ${li.lastElementChild.children.length}`);
    console.log(" ");
});



