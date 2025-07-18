let cart = [];
let total = 0;

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  total += price;
  updateCartUI();
}

function updateCartUI() {
  const cartList = document.getElementById("cartList");
  const cartTotal = document.getElementById("cartTotal");

  cartList.innerHTML = "";
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartList.appendChild(li);
  });

  cartTotal.textContent = total;
}
// Save total to localStorage for payment page
function saveTotalToStorage() {
  localStorage.setItem('cartTotal', total);
}