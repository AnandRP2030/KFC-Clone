import { navbar } from "../components/navbar/navbar.js";
document.querySelector(".navbar").innerHTML = navbar();

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


