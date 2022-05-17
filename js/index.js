// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  product.querySelector('.subtotal span').textContent = price * quantity

  return price * quantity
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

    const allProducts = document.getElementsByClassName('product');

    let sum = 0

    Array.from(allProducts).forEach(element => {
      sum += updateSubtotal(element)
    })

    // ITERATION 3
    // At the end of the calculateAll() function, reuse the total value you just calculated
    // in the previous iteration and update the corresponding DOM element.
    // Calculate the total price for the products in your cart by summing all
    // of the subtotals returned by updateSubtotal() when it was called with each product.


    const totalPrice = document.getElementById('total-value').querySelector('span').textContent = sum

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProduct = document.getElementsByClassName('btn btn-remove')
  removeProduct.addEventListener('click', removeProduct)

});
