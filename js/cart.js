    // Cart
    

    // Cart Working
    /*if (document.readyState == "loading") {
      document.addEventListener("DOMContentLoaded", ready);
    }
    else {
      ready();
    }
     function ready() {
      // Remove Items From Cart
      var removeCartButton = document.getElementsByClassName("remove");
      console.log(removeCartButton);
      for (let i= 0; i < removeCartButton.length; i++) {
        var button = removeCartButton[i];
        button.addEventListener("click", removeCartItem);
      }
     }
     // Quantity Changes
     var quantityInputs = document.getElementsByClassName("cart-quantity");
     for (let i= 0; i < quantityInputs.length; i++) {
      var input = quantityInputs[i];
      input.addEventListener("change", quantityChange);
     }
     // Add to Cart
     var addCart = document.getElementsByClassName("add");
     for (let i= 0; i < addCart.length; i++) {
      var button = addCart[i];
      button.addEventListener("click", addCartClicked);
     }
     // Buy Button Work
     document.getElementsByClassName("btn-buy")[0].addEventListener("click", BuyButtonClicked);

     // Buy Button Work 
     function BuyButtonClicked() {
      alert("Order placed");
      var cartContent = document.getElementsByClassName("cart-content")[0];
      while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild)
      }
      updatetotal();
     }

     // Remove Items From Cart
     function removeCartItem(event) {
       var buttonClicked = event.target;
       buttonClicked.parentElement.remove();
       updatetotal();
     }
     // Quantity Changes
     function quantityChange(event) {
      var input = event.target;
      if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
      }
      updatetotal();
     }
     // Add to Cart
     function addCartClicked(event) {
      var button = event.target;
      var shopProducts = button.parentElement
      var prodtitle = shopProducts.getElementsByClassName("prod-title").innerText
      var price = shopProducts.getElementsByClassName("price")[0].innerText
      var productImg = shopProducts.getElementsByClassName("prod-img")[0].src
      addProducttoCart(prodtitle, price, productImg);
      updatetotal();
     }
     function addProducttoCart(title, price, productImg) {
      var cartShopBox = document.createElement("div");
      cartShopBox.classList.add("cart-box");
      var cartItems = document.getElementsByClassName("cart-content")[0]
      var cartItemsNames = cartItems.getElementsByClassName("cart-product-title")
      for (let i= 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText == title) {
          alert("Already added this to cart");
          return;
        }
      }
      var cartBoxContent = `<img src="${productImg}" alt="img" class="cart-img">
      <div class="details-box">
      <div class="cart-product-title">${prodtitle}</div>
      <div class="cart-price">${price}</div>
      <input type="number" value="1" class="cart-quantity">
      </div>
      <i class="glyphicon glyphicon-trash remove"></i>`
      cartShopBox.innerHTML = cartBoxContent;
      cartItems.append(cartShopBox);
      cartShopBox.getElementsByClassName("remove")[0].addEventListener("click", removeCartItem);
      cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change", quantityChange)
       }
     // Update total
     function updatetotal() {
       var cartContent = document.getElementsByClassName("cart-content")[0]
       var cartBoxes = document.getElementsByClassName("cart-box")
       var total = 0;
       for (let i= 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0]
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0]
        var price = parseFloat(priceElement.innerText.replace("₦", ""))
        var quantity = quantityElement.value
        total = total + (price * quantity);
      }
        // If price contain some cents value
        total = Math.round(total * 10000) / 10;
        document.getElementsByClassName("total-price")[0].innerText = "₦" + total;
     } */

let list = document.querySelector('.pur');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('#total');
let quantity = document.querySelector('.quantity');
let quantityTwo = document.querySelector('.quantity-two');
let quantityThree = document.querySelector('.quantity-three');
const btnBuy = document.querySelector('.btn-buy');
btnBuy.addEventListener('click', (event) => {
    event.preventDefault();
});

let cartIcon = document.querySelector("#cart-icon");
let cartIconTwo = document.querySelector("#cart-icon-two");
let cart = document.querySelector(".cart");
let cartClose = document.querySelector("#close");
cartIcon.onclick = (event) => {
  event.preventDefault();
  cart.classList.add("active");
  body.style.overflow = "hidden";
}
cartIconTwo.onclick = (event) => {
  event.preventDefault();
  cart.classList.add("active");
  cart.style.overflow = "auto"
  body.style.overflow = "hidden";
}
cartClose.onclick = () => {
  cart.classList.remove("active");
  cart.style.overflow = "hidden"
  body.style.overflow = "auto";
}

let products = [
    {
        id: 1,
        name: 'Chandellier',
        image: 'chandellier.png',
        price: 50250.00
    },
    {
        id: 2,
        name: 'Bedroom Lamp',
        image: 'lamp.png',
        price: 43300.00
    },
    {
        id: 3,
        name: 'Dining Tables & Chair',
        image: 'diner.png',
        price: 78000.00
    },
    {
        id: 4,
        name: 'Sofa',
        image: 'sofa.png',
        price: 100000.00
    },
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
           <div class="image-two">
              <img src="images/${value.image}" class="cont-img-two">
              <div class="cont-til">
                <h3 class="title">${value.name}</h3>
                <div>
                  <p class="price">${value.price.toLocaleString()}</p>
                  <i class="glyphicon glyphicon-shopping-cart" id="cart-shop" onclick="addToCard(${key})"></i>
                </div>
              </div>
            </div>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
        listCards[key].quantityTwo = 1;
        listCards[key].quantityThree = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div class="cart-box">
                  <img src="images/${value.image}" class="cart-img"/>
                  <div class="details-box">
                    <div class="cart-product-title">${value.name}</div>
                    <div class="cart-price">₦ ${value.price.toLocaleString()}</div>
                  </div>
                  <i class="glyphicon glyphicon-trash remove"></i>
                </div>
                <div class="cart-quantity">
                  <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                  <div class="count">${value.quantity}</div>
                  <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
              listCard.appendChild(newDiv);
        }
    })
    total.innerText = '₦' + totalPrice.toLocaleString();
    quantity.innerText = count;
    quantityTwo.innerText = count;
    quantityThree.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }
    else if (quantityTwo == 0) {
      delete listCards[key];
    }
    else if (quantityThree == 0) {
      delete listCards[key];
    }
    else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;

        listCards[key].quantityTwo = quantityTwo;
        listCards[key].price = quantity * products[key].price;

        listCards[key].quantityThree = quantityThree;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
function ready() {
  var removeCartButton = document.querySelector("#close");
  for (let i= 0; i < removeCartButton.length; i++) {
    var button = removeCartButton[i];
    button.addEventListener("click", (event) => {
      var buttonClicked = event.target
      buttonClicked = listCard.remove();
      var listCard  = document.querySelector(".listCard");
    });
  }
 }
 ready();
 /*function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  changeQuantity();
}*/