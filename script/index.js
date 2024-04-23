'use strict';

const addToCartButton = document.getElementById('addToCartButton');
const toastContainer = document.getElementById('toastContainer');

const showToast = () => {
  toastContainer.innerHTML = '<p>Item successfully added to cart!</p>';
  toastContainer.classList.add('toast-show');

  // remove toast after 5s appearance
  setTimeout(() => {
    toastContainer.classList.remove('toast-show');

    setTimeout(() => {
      toastContainer.remove();
    }, 500);
  }, 4000);
};

addToCartButton.addEventListener('click', () => {
  addToCartButton.innerText = 'Adding...';

  setTimeout(() => {
    addToCartButton.innerText = 'Add to Cart';
    showToast();
  }, 1000);
});
