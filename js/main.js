
// Enter your code below.
(function (){
  let newOrder = document.querySelector('#new-order-form');

  newOrder.addEventListener('submit', (evt) => {
   evt.preventDefault();

   let orderName = evt.target.elements['order-item-name'];
   let orderPrice = evt.target.elements['order-item-price'];
   let orderItemSize = evt.target.elements['order-size'];

   let nameValue = orderName.value;
   let priceValue = parseFloat(orderPrice.value);
   let sizeValue = orderItemSize.value;

   let isValidForm = true;

   if (isValueNotEmpty(nameValue) === false){
     orderName.classList.add('is-invalid');
     isValidForm = false;
   } else {
     orderName.classList.remove('is-invalid');
   }

   if (isGreaterThanFive(priceValue) === false){
     orderPrice.classList.add('is-invalid');
     isValidForm = false;
   } else {
     orderPrice.classList.remove('is-invalid')
   }

  if (isValueNotEmpty(sizeValue) === false){
    orderItemSize.classList.add('is-invalid');
    isValidForm = false;
  } else {
    orderItemSize.classList.remove('is-invalid');
  }
 
  if (isValidForm) {
    addOrderItem(nameValue, priceValue, sizeValue);

    budgetFormElement.reset();
  }
});


// functions needed for assessment (do not change.)

/**
 * Checks if a value is not empty.
 *
 * @param {any} value - The value to check.
 * @returns {boolean} - Returns true if the value is not empty, false otherwise.
 */
const isValueNotEmpty = (value) => {
  if (value !== "") {
      return true
  }
  return false
}

/**
 *
 * Checks if a given value is greater than zero.
 * @param {number} value - The value to be checked.
 * @returns {boolean} - True if the value is greater than zero, otherwise false.
 */
const isGreaterThanFive = (value) => {
  if (value > 5) {
      return true
  }
  return false
}

/**
 * Adds a new order item to the order list.
 *
 * @param {string} orderItemName - The name of the order item.
 * @param {number} orderItemPrice - The price of the order item.
 * @param {string} orderSize - The size of the order item.
 * @returns {void}
 */
const addOrderItem = (orderItemName, orderItemPrice, orderSize) => {
  let orderItemList = document.querySelector("#order-item-list")
  let newOrderItem = `<li class="list-group-item d-flex justify-content-between">
    <div class="w-100 justify-content-between">
      <h5 class="mb-1">${orderItemName}</h5>
      <small>${orderSize}</small>
    </div>
    <p class="mb-1">${'$'+orderItemPrice}</p>
  </li>`
  orderItemList.innerHTML += newOrderItem
}

})();