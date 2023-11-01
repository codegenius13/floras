(function () {
    "use strict"
    // Cart
    let cartIcon = document.querySelector("#cart-icon");
    let cart = document.querySelector(".cart");
    let cartClose = document.querySelector("#close");
    cartIcon.onclick = () => {
      cart.classList.add("active");
    }
    cartClose.onclick = () => {
      cart.classList.remove("active");
    }

    // Cart Working
    if (document.readyState == "loading") {
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
      var title = shopProducts.getElementsByClassName("prod-title")[0].innerText
      var price = shopProducts.getElementsByClassName("price")[0].innerText
      var productImg = shopProducts.getElementsByClassName("prod-img")[0].src
      addProducttoCart(title, price, productImg);
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
      <div class="cart-product-title">${title}</div>
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
        var price = parseFloat(priceElement.innerText.replace("$", ""))
        var quantity = quantityElement.value
        total = total + (price * quantity);
      }
        // If price contain some cents value
        total = Math.round(total * 100) / 100;
        document.getElementsByClassName("total-price")[0].innerText = "$" + total;
     } 
})();