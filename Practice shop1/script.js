let cartCount = 0;
const cartCounter = document.getElementById("cart-count");
const productContainer = document.getElementById("product-container");

// List of products
const products = [
  {
    id: 1,
    name: "Awesome Headphones",
    price: 1999,
    image: "images/1.jpg"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 2499,
    image: "images/2.jpg"
  },
  {
    id: 3,
    name: "Wireless Speaker",
    price: 1599,
    image: "https://via.placeholder.com/250"
  },
  {
    id: 4,
    name: "Bluetooth Earbuds",
    price: 1299,
    image: "https://via.placeholder.com/250"
  },
  {
    id: 3,
    name: "Wireless Speaker",
    price: 1599,
    image: "https://via.placeholder.com/250"
  },
  {
    id: 3,
    name: "Wireless Speaker",
    price: 1599,
    image: "https://via.placeholder.com/250"
  }
];

// Generate product cards
products.forEach(product => {
  const card = document.createElement("div");
  card.className = "product";

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h2>${product.name}</h2>
    <p class="price">₹${product.price}</p>
    <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
  `;

  productContainer.appendChild(card);
});

// Cart logic
function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (product) {
    cartCount++;
    cartCounter.textContent = cartCount;
    alert(`${product.name} added to cart!`);
  }
}
