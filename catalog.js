let products = [
  {
    name: "Хлеб",
    price: 54,
    brend: "borodinski",
    date: "15.06.2026",
    img: "./img/woocommerce-placeholder.png",
  },
  {
    name: "Молоко",
    price: 89,
    brend: "Prostokvashino",
    date: "10.06.2026",
    img: "./img/woocommerce-placeholder.png",
  },
  {
    name: "Куриное филе",
    price: 380,
    brend: "Pestruha",
    date: "08.06.2026",
    img: "./img/woocommerce-placeholder.png",
  },
  {
    name: "Рис длиннозерный",
    price: 110,
    brend: "Mistral",
    date: "20.12.2027",
    img: "./img/woocommerce-placeholder.png",
  },
  {
    name: "Яйца C0",
    price: 125,
    brend: "Sinyavino",
    date: "28.06.2026",
    img: "./img/woocommerce-placeholder.png",
  },
  {
    name: "Сыр Тильзитер",
    price: 210,
    brend: "Lambert",
    date: "15.08.2026",
    img: "./img/woocommerce-placeholder.png",
  },
  {
    name: "Масло сливочное",
    price: 195,
    brend: "Brest-Litovsk",
    date: "22.07.2026",
    img: "./img/woocommerce-placeholder.png",
  },
  {
    name: "Овсяные хлопья",
    price: 75,
    brend: "Yasno Solnyshko",
    date: "05.04.2027",
    img: "./img/woocommerce-placeholder.png",
  },
  {
    name: "Йогурт греческий",
    price: 65,
    brend: "Teos",
    date: "18.06.2026",
    img: "./img/woocommerce-placeholder.png",
  },
  {
    name: "Творог 5%",
    price: 105,
    brend: "Savushkin",
    date: "12.06.2026",
    img: "./img/woocommerce-placeholder.png",
  },
  {
    name: "Макароны Перья",
    price: 95,
    brend: "Barilla",
    date: "10.05.2028",
    img: "./img/woocommerce-placeholder.png",
  },
  {
    name: "Шоколад горький",
    price: 140,
    brend: "Babaevskiy",
    date: "01.06.2027",
    img: "./img/woocommerce-placeholder.png",
  },
  {
    name: "Кофе молотый",
    price: 450,
    brend: "Egoiste",
    date: "14.11.2027",
    img: "./img/woocommerce-placeholder.png",
  },
  {
    name: "Чай черный",
    price: 180,
    brend: "Greenfield",
    date: "30.04.2028",
    img: "./img/woocommerce-placeholder.png",
  },
  {
    name: "Яблоки Ред Чиф",
    price: 160,
    brend: "Fresh Orchard",
    date: "20.06.2026",
    img: "./img/woocommerce-placeholder.png",
  },
  {
    name: "Бананы",
    price: 145,
    brend: "Ecuador Fresh",
    date: "10.06.2026",
    img: "./img/woocommerce-placeholder.png",
  },
  {
    name: "Томаты черри",
    price: 220,
    brend: "Flamenco",
    date: "14.06.2026",
    img: "./img/woocommerce-placeholder.png",
  },
  {
    name: "Консервированный тунец",
    price: 175,
    brend: "Fortuna",
    date: "12.03.2029",
    img: "./img/woocommerce-placeholder.png",
  },
  {
    name: "Подсолнечное масло",
    price: 130,
    brend: "Zolotaya Semechka",
    date: "01.05.2027",
    img: "./img/woocommerce-placeholder.png",
  },
  {
    name: "Гречневая крупа",
    price: 85,
    brend: "Uvelka",
    date: "18.10.2027",
    img: "./img/woocommerce-placeholder.png",
  },
];

const productsEl = document.getElementById("products");

const search = document.getElementById("searchProducts");

search.addEventListener("input", () => {
  const searchText = search.value.toLowerCase();

  const filteredProducts = products.filter((tovar) => {
    return tovar.name.toLowerCase().includes(searchText);
  });

  RenderProducts(filteredProducts);
});

function RenderProducts(array) {
  let cards = array.map((tovar) => {
    return `
      <div class='card'>
        <img src="${tovar.img}">
        <h3>${tovar.name}</h3>
        <p class="price">${tovar.price}</p>
        <p class="category">${tovar.brend}</p>
      </div>
    `;
  });
  productsEl.innerHTML = cards.join("");
}

RenderProducts(products);
