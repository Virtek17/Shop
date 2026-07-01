const products = [
  {
    id: 1,
    name: "iPhone 15",
    price: 1200,
    category: "Телефон",
    image:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 2,
    name: "MacBook Air",
    price: 1800,
    category: "Ноутбук",
    image:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 3,
    name: "AirPods",
    price: 250,
    category: "Наушники",
    image:
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 4,
    name: "Samsung S24",
    price: 1000,
    category: "Телефон",
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1200&auto=format&fit=crop",
  },
];

const productsEl = document.getElementById("products");

function RenderProducts() {
  const cards = products.map((product) => {
    return `
      <div class='card'>
        <img src="${product.image}">
        <h3>${product.name}</h3>
        <p class="price">${product.price}</p>
        <p class="category">${product.category}</p>
      </div>
    `;
  });

  productsEl.innerHTML = cards.join("");
}

RenderProducts();
