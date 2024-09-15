let foodCards = document.getElementById("foodCards");
let cards = [
  {
    src: "./images/food-list-1.jpg",
    title: "Chicken Salat",
    desc: "We make delicious Chicken",
  },
  {
    src: "./images/food-list-2.jpg",
    title: "Taco Salat",
    desc: "We Make delicious Taco",
  },
  {
    src: "./images/food-list-3.jpg",
    title: "Sandwich",
    desc: "We make delicious Food",
  },
  {
    src: "./images/food-list-4.jpg",
    title: "Pizza Hut",
    desc: "We make delicious Pizza",
  },
];
for (i of cards) {
  foodCards.innerHTML += `
    <div class="food-list_card">
            <img src="${i.src}" class="food-list_img" />
            <h4 class="food-list_title">${i.title}</h4>
            <p class="food-list_desc">${i.desc}</p>
          </div>
    `;
}
