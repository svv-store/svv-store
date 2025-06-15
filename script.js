
function toggleLogin() {
  const section = document.getElementById('login-section');
  section.classList.toggle('hidden');
}

function login() {
  const name = document.getElementById('nameInput').value;
  if (name.trim()) {
    alert(`Welcome, ${name}!`);
    document.getElementById('login-section').classList.add('hidden');
  } else {
    alert('Please enter your name.');
  }
}

function addToCart(product) {
  const cart = document.getElementById('cartItems');
  const item = document.createElement('li');
  item.textContent = product;
  cart.appendChild(item);
}
