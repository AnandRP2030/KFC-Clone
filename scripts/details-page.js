import { navbar } from "../components/navbar/navbar.js";
document.querySelector(".navbar").innerHTML = navbar();

// side dish container
let sideArr = [
  {
    image: "https://digitaleat.kfc.com/menus/image/bare/kfc-IndFries",
    name: "Secret Recipe Fries",
  },
  {
    image: "https://digitaleat.kfc.com/menus/image/bare/kfc-IndMashGravy",
    name: "Mashed Potatoes & Gravy",
  },
  {
    image: "https://digitaleat.kfc.com/menus/image/bare/kfc-IndMacCheese",
    name: "Mac & Cheese",
  },
  {
    image: "https://digitaleat.kfc.com/menus/image/bare/kfc-IndColeslaw",
    name: "Cole Slaw",
  },
  {
    image: "https://digitaleat.kfc.com/menus/image/bare/kfc-IndGreenBeans",
    name: "Green Beans",
  },
  {
    image: "https://digitaleat.kfc.com/menus/image/bare/kfc-IndGravy",
    name: "Gravy",
  },
  {
    image: "https://digitaleat.kfc.com/menus/image/bare/kfc-IndCorn",
    name: "Whole Kernel Corn",
  },
  {
    image: "https://digitaleat.kfc.com/menus/image/bare/kfc-IndMash",
    name: "Mashed Potatoes (No Gravy)",
  },
];

displaySide(sideArr);

function displaySide(sideArr) {
  let side1Container = document.querySelector(".side-dish-1");
  side1Container.innerHTML = "";

  sideArr.forEach((e) => {
    let card = document.createElement("div");
    card.setAttribute("class", "side-dish-card");
    let itemImg = document.createElement("img");
    itemImg.classList.add("side-dish-img");
    itemImg.setAttribute("src", e.image);
    let itemName = document.createElement("p");
    itemName.textContent = e.name;
    let checkBox = document.createElement("div");
    checkBox.setAttribute("class", "check-box");

    card.append(itemImg, itemName, checkBox);
    side1Container.append(card);

    // functionlities

    card.onclick = function () {
      showSideName(e);
      showConfirmIcon(checkBox);
    };
  });
}

function showSideName(e) {
  let sideItemArea = document.querySelector(".side-item");
  sideItemArea.textContent = `Side: ${e.name}`;
}

function showConfirmIcon(checkBox) {
  let allCheckBoxes = document.querySelectorAll(".check-box");

  allCheckBoxes.forEach((e) => {
    e.innerHTML = "";
  });
  checkBox.innerHTML +=
    '<i class="check-icon fa-sharp fa-solid fa-circle-check"></i>';
}

// beverage arr

let beverageArr = [
  {
    image: "https://digitaleat.kfc.com/menus/image/bare/kfc-Pepsi",
    name: "Pepsi",
  },
  {
    image: "https://digitaleat.kfc.com/menus/image/bare/kfc-dietPepsi",
    name: "Diet Pepsi",
  },
  {
    image: "https://digitaleat.kfc.com/menus/image/bare/kfc-mtndew",
    name: "Mountain Dew",
  },
  {
    image:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-mtndewsweetlightning",
    name: "Mountain Dew Sweet Lightning",
  },
  {
    image: "https://digitaleat.kfc.com/menus/image/bare/kfc-sierramist",
    name: "Sierra Mist",
  },
  {
    image: "https://digitaleat.kfc.com/menus/image/bare/kfc-LemMed",
    name: "Colonel Lemondade",
  },
  {
    image: "https://digitaleat.kfc.com/menus/image/bare/kfc-drPepper",
    name: "Dr. Pepper",
  },
  {
    image: "https://digitaleat.kfc.com/menus/image/bare/kfc-sweetTea",
    name: "Sweat Tea",
  },
];

displayBeverage(beverageArr);

function displayBeverage(beverageArr) {
  let side1Container = document.querySelector(".beverage-container");
  side1Container.innerHTML = "";

  beverageArr.forEach((e) => {
    let card = document.createElement("div");
    card.setAttribute("class", "beverage-card");
    let itemImg = document.createElement("img");
    itemImg.classList.add("beverage-card-img");
    itemImg.setAttribute("src", e.image);
    let itemName = document.createElement("p");
    itemName.textContent = e.name;

    let checkBox = document.createElement("div");
    checkBox.setAttribute("class", "bev-check-box");

    card.append(itemImg, itemName, checkBox);
    side1Container.append(card);

    // functionlities
    card.onclick = function () {
      showBeverageName(e);
      showTick(checkBox);
    };
  });
}

function showTick(checkBox) {
  let allCheckBoxes = document.querySelectorAll(".bev-check-box");
  allCheckBoxes.forEach((e) => {
    e.innerHTML = "";
  });
  checkBox.innerHTML +=
    '<i class="check-icon fa-sharp fa-solid fa-circle-check"></i>';
}

function showBeverageName(e) {
  let bevArea = document.querySelector(".beverage-item");
  bevArea.innerHTML = `Beverage: ${e.name}`;
}

// qty count
let qtyCount = 1;
let qtyCountArea = document.querySelector(".qty-count");
qtyCountArea.innerHTML = qtyCount;

let qtyIncrementBtn = document.querySelector(".qty-increment");
qtyIncrementBtn.onclick = function () {

  qtyCountArea.innerHTML = ++qtyCount;
};

let qtyDecrementBtn = document.querySelector(".qty-decrement");
qtyDecrementBtn.onclick = function (){
    if (qtyCount > 1){
        
        qtyCountArea.innerHTML = --qtyCount; 
    }
}

let deliveryContainer = document.querySelector(".delivery-options-container");

let buyBtn = document.querySelector(".buy-btn");
buyBtn.onclick = function (){
    deliveryContainer.classList.add("display-block")
}

let closeDivBtn = document.querySelector('.close-delivery-btn');
closeDivBtn.onclick = function (){

    deliveryContainer.classList.remove("display-block");
}


// redirect to address page
let quickPick = document.querySelector(".quick-pick-btn");
quickPick.onclick = function (){
  window.location.href = "../pages/address-page.html"
}

let deliveryPick = document.querySelector(".delivery-btn");
deliveryPick.onclick = function (){
  window.location.href = "../pages/address-page.html"
}