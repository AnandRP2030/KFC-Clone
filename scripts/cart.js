// import navbar 
import { navbar } from "../components/navbar/navbar.js";
document.querySelector(".navbar").innerHTML = navbar();

// import footer 
import {footer} from "../components/footer/footer.js"
document.querySelector(".footer-div").innerHTML = footer();

// quantity change

let qtyCount = 1;
let qtyCountAreas = document.querySelectorAll(".qty-count");

let qtyIncrementBtns = document.querySelectorAll(".qty-increment");


for (let i = 0; i < qtyIncrementBtns.length; i++){
    qtyIncrementBtns[i].onclick = function () {
        
        qtyCount = qtyCountAreas[i].innerHTML;
      qtyCountAreas[i].innerHTML = ++qtyCount;

    };
}

let qtyDecrementBtns = document.querySelectorAll(".qty-decrement");

for (let i = 0; i < qtyDecrementBtns.length; i++){
    qtyDecrementBtns[i].onclick = function () {
        qtyCount = qtyCountAreas[i].innerHTML;
        if (qtyCount>1){
            qtyCountAreas[i].innerHTML = --qtyCount;
        }
    };
}



let cartData = JSON.parse(localStorage.getItem("cart-data")) || []; 

function displayCartData (cartData){
    let cartContainer = document.querySelector(".cart-container");
    cartContainer.innerHTML = "";

    cartData.forEach((elem, idx) => {
        
        let card = document.createElement("div");
        card.setAttribute("class", "cart-item");
        let itemImg = document.createElement("img");
        itemImg.src = elem.Image;

        let rightSideDiv = document.createElement("div");
        rightSideDiv.setAttribute("class", "right-side")
        
        let titleDiv = document.createElement("div")
        let title = document.createElement("h3");
        title.textContent = elem.title;
        let desc = document.createElement("p");
        desc.setAttribute("class", "item-des")
        desc.textContent = elem.description;
        
        titleDiv.append(title, desc);
        
        let priceDiv = document.createElement("div");
        priceDiv.setAttribute("class", "price-div")


        if (elem.price == NaN){
            elem.price = `₹370 .00`;
        }
        priceDiv.textContent =  elem.price;





        
        let qtyDiv = document.createElement ("div");
        qtyDiv.setAttribute("class", "qty-div");

        let spanInc = document.createElement("span");
        spanInc.innerHTML = `<span class="material-symbols-outlined qty-increment">
        add_circle
      </span>`

     
        let spanQty = document.createElement("span");
        spanQty.innerHTML = 1;
        spanQty.setAttribute("class","qty-count");
    
        let spanDec = document.createElement("span");
        spanDec.innerHTML = ' <i id="circle-min" class="fa fa-circle-minus qty-decrement"></i>';

        spanInc.onclick = function (){
            let currentQty = spanQty.innerHTML;
            spanQty.innerHTML = ++currentQty;

            //change price;
            let price = elem.price;
            price =Number(price.substring(1, price.length));
            

          

        }

        spanDec.onclick = function (){
          let currentQty = spanQty.innerHTML;
          if (currentQty > 1){
            spanQty.innerHTML = --currentQty;
          }
        }
          
       
        qtyDiv.append(spanInc, spanQty, spanDec);

        let removeBtn = document.createElement("button");
        removeBtn.setAttribute("class", "remove-btn");
        removeBtn.textContent = `Remove`

        removeBtn.onclick = function (){
            removeItem (idx);
        }
        

        rightSideDiv.append(titleDiv, priceDiv, qtyDiv, removeBtn)
        card.append(itemImg, rightSideDiv)

        cartContainer.append(card)




    });

}

displayCartData(cartData);


//navbar linking
let navMenu = document.querySelector("#navbar-menu");
navMenu.onclick = function (){
    window.location.href = "../pages/menu.html"
}

let kfcLogo = document.querySelector("#navbar-kfc-logo");
kfcLogo.onclick = function (){
    window.location.href = "../index.html"
}


// remove item 
function removeItem (idx){
    cartData.splice(idx, 1);
    displayCartData(cartData);
    localStorage.setItem("cart-data", JSON.stringify(cartData));
}

