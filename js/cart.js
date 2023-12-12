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
        price: 540.54
    },
    {
        id: 2,
        name: 'Bedroom Lamp',
        image: 'lamp.png',
        price: 433.42
    },
    {
        id: 3,
        name: 'Dining Tables & Chair',
        image: 'diner.png',
        price: 780.00
    },
    {
        id: 4,
        name: 'Sofa',
        image: 'sofa.png',
        price: 1000.20
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
    total.innerText = '$' + totalPrice.toLocaleString();
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

