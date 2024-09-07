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
