// ITERATION 1

function updateSubtotal(product) {
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
  return target.parentNode.parentNode.remove();

}

// ITERATION 5

function createProduct(event) {
  const target = event.currentTarget;
  const template = document.querySelector("#newproduct");
  const tbody = document.querySelector("tbody");
  const clone = document.importNode(template.content, true);
  const td = clone.querySelectorAll("td");
  const newName = document.querySelector('.create-product input[type="text"]');

  td[0].textContent = document.querySelector('.create-product input[type="text"]').value;
  td[1].textContent = document.querySelector('.create-product input[type="number"]').value;

  tbody.appendChild(clone);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const remoProduct = document.querySelectorAll('.btn-remove');
  remoProduct.forEach(element => {
    element.addEventListener('click', removeProduct)

  })

  const newProduct = document.getElementById('create')
  newProduct.addEventListener('click', createProduct);


});
