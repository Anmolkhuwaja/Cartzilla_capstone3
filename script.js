//Get input on sm screen with Search icon
const searchIcon = document.getElementById('searchIcon');
const searchInput = document.getElementById('searchInput');
    searchIcon.addEventListener('click', function () {
        searchInput.classList.toggle('show');
});



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



//fetch data from API
let productCard = document.querySelector(".product");
let displayProduct = async () => {
  productCard.innerHTML = '';
  let product = await fetch('https://fakestoreapi.com/products');
  let finalProduct = await product.json();



  // Use slice to get the first 8 items
  finalProduct.slice(0, 8).forEach(element => {
    productCard.innerHTML += `
      <div class="card product-card h-100 border-0 shadow-none d-flex flex-column">
        <div class="position-relative z-2 flex-grow-1">
          <a class="d-block p-2 p-lg-3" href="shop-product-grocery.html">
            <div class="pic">
              <img src="${element.image}" alt="Image" class="img-fluid" style="max-height: 150px; object-fit: contain;"> <!-- Adjust image size -->
            </div>
          </a>
          <div class="card-body pt-0 px-1 px-md-2 px-lg-3 pb-2 flex-grow-1 d-flex flex-column">
            <div class="h6 mb-2">${element.price}</div>
            <h6 class="fs-sm lh-base mb-2 text-truncate" style="max-height: 3rem; overflow: hidden; text-overflow: ellipsis;">
              <a class="cardtext" href="shop-product-grocery.html">${element.title}</a>
            </h6>
          </div>
        </div>
        <div class="fs-xs text-body-secondary px-1 px-md-2 px-lg-3 pb-2 pb-md-3">${element.rating.count}</div>
        <button class="btn bg-black text-white fw-medium mb-2 rounded-pill mt-auto">ADD TO CART</button>
      </div>`;
  });
};
displayProduct();



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