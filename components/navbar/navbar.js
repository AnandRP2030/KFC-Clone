export function navbar() {
  return ` <div class="navbar-left">
    <div class="nav-checkbtn">
      <span class="material-symbols-outlined"> menu </span>
    </div>
    <img 
      src="	https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg
        "
      alt="KFC-LOGO"
    />
    <p class="hide-item">Menu</p>
    <p class="hide-item">Deals</p>
  </div>

  <div class="navbar-right">
    <img
      class="man-icon hide-item"
      src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg"
      alt="man-icon"
    />
    <p class="account hide-item">Account</p>

    <p>₹0.00</p>
    <img
      src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg"
    />
  </div>`;
}



//import code sample

// import  {navbar} from "./demo.js"
// let na = document.querySelector(".navbar");
// na.innerHTML = navbar();


// 2. Dont' forget to add type="module" in your script tag
