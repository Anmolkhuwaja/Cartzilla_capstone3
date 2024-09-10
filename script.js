//Get input on sm screen with Search icon
const searchIcon = document.getElementById('searchIcon');
const searchInput = document.getElementById('searchInput');
    searchIcon.addEventListener('click', function () {
        searchInput.classList.toggle('show');
});

// Toggle the Display of the Links Div
function toggleLinks() {
  const linksDiv = document.querySelector('.linkscard');
  // Toggle the display property
  if (linksDiv.style.display === 'none' || linksDiv.style.display === '') {
      linksDiv.style.display = 'block'; // Show the div
  } else {
      linksDiv.style.display = 'none'; // Hide the div
  }
}


// Selectors for the cart icon badge and cart container in the off-canvas
const cartIcon = document.getElementById('cart-icon');
const cartContainer = document.querySelector('.off-canvas-cart-items'); // Use this class in your off-canvas

// Function to add item to local storage
function addToCart(item) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  renderCartItems();
}

// Function to render cart items from Local Storage to Off-Canvas
function renderCartItems() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cartContainer.innerHTML = ''; // Clear previous items

  cart.forEach((item, index) => {
    const cartItem = document.createElement('div');
    cartItem.className = 'card product-card h-100 border-0 shadow-none d-flex flex-column mb-3';
    cartItem.innerHTML = `
      <div class="position-relative z-2 flex-grow-1 d-flex align-items-center">
        <a class="d-block flex-shrink-0" href="shop-product-grocery.html">
          <img src="${item.image}" alt="Image" class="img-fluid" style="max-height: 60px; object-fit: contain;">
        </a>
        <div class="w-100 ps-3 d-flex flex-column">
           <button type="button" class="btn-close pt-2 fs-sm remove-item" aria-label="Remove from cart"></button>
          <div class="h6 mb-">$${item.price.toFixed(2)}</div>
          <h5 class="fs-sm fw-medium mb-2">
            <a class="size underline ancor" href="shop-product-grocery.html">${item.title}</a>
          </h5>
          <div class="h6 pb-1 mb-2">${item.count}</div>
        </div>
      </div>
    `;

    // Append the item to the cart container in the off-canvas
    cartContainer.appendChild(cartItem);

    // Event listener to remove item from the cart
    cartItem.querySelector('.remove-item').addEventListener('click', () => {
      removeCartItem(index);
    });
  });
}

// Function to update the cart item count on the cart icon
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cartIcon.textContent = cart.length;
}

// Function to remove item from the cart
function removeCartItem(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1); // Remove item at the specified index
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  renderCartItems();
}

// Fetch products and display them
let productCard = document.querySelector(".product");
let displayProduct = async () => {
  productCard.innerHTML = '';
  let product = await fetch('https://fakestoreapi.com/products');
  let finalProduct = await product.json();

  // Use slice to get the first 8 items
  finalProduct.slice(0, 8).forEach(element => {
    const productElement = document.createElement('div');
    productElement.className = 'card product-card h-100 border-0 shadow-none d-flex flex-column';
    productElement.innerHTML = `
      <div class="position-relative z-2 flex-grow-1">
        <a class="d-block p-2 p-lg-3" href="shop-product-grocery.html">
          <div class="pic">
            <img src="${element.image}" alt="Image" class="img-fluid" style="max-height: 150px; object-fit: contain;"> <!-- Adjust image size -->
          </div>
        </a>
        <div class="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2 flex-grow-1 d-flex flex-column">
          <div class="h6 mb-2">${element.price.toFixed(2)}</div>
          <h6 class="fs-sm lh-base mb-2 text-truncate" style="max-height: 3rem; overflow: hidden; text-overflow: ellipsis;">
            <a class="cardtext" href="shop-product-grocery.html">${element.title}</a>
          </h6>
        </div>
      </div>
      <div class="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">${element.rating.count}</div>
      <button class="btn bg-black text-white fw-medium mb-2 rounded-pill mt-auto add-to-cart">ADD TO CART</button>
    `;

    productCard.appendChild(productElement);

    // Event listener for Add to Cart button
    productElement.querySelector('.add-to-cart').addEventListener('click', () => {
      addToCart({
        image: element.image,
        title: element.title,
        price: element.price,
        count: element.rating.count // Store the rating count as 'count'
      });
    });
  });
};
displayProduct();

// Update cart count on page load
updateCartCount();



// Cards Pagination
document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      680: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 3
      }
    }
  });
});


