const cartBt = document.getElementById("cartBt");
const cartItems = document.querySelector(".cart-items");

cartBt.addEventListener("click", () => {
    if (cartItems.style.display === "" || cartItems.style.display === "none"){
        cartItems.style.display="flex";
    }
    else{
        cartItems.style.display = "none";
    }
    console.log("done");
});

// add and remove selected class for the thumnails
const imageThumnails=document.querySelectorAll(".product-preview-images .image-thumnails span");
const coverImg =document.getElementById("coverImg");
imageThumnails.forEach(img => {
    img.addEventListener("click",() => {
        imageThumnails.forEach(unSelectedImg => {
            unSelectedImg.classList.remove("selected");
        });
        img.classList.add("selected");
        console.log(img.querySelector("img").src.replace("-thumbnail",""));
        coverImg.src=img.querySelector("img").src.replace("-thumbnail","");
    });
});


//  handel increment and decrement buttons of product count ( + , - )
const countIncrementBt= document.getElementById("countIncrementBt");
const countDecrementBt= document.getElementById("countDecrementBt");
const productCount= document.querySelector(".product-count small");

let count=0;

countIncrementBt.addEventListener("click", () => {
    count++;
    productCount.innerHTML=count;
});

countDecrementBt.addEventListener("click", () => {
    if (count > 0){
        count--;
        productCount.innerHTML=count;
    }
});
console.log(count);
// handel addToCart button

const addToCartBt = document.getElementById("addToCartBt");

let productName=document.getElementById("product-name");
let product_price=document.querySelector(".product-info .product-price #price").innerHTML;
product_price=product_price.replace("$","");
let productCost;
console.log("productCost "+ productCost);
const cartItem=document.querySelector(".cart-items .items .item");
console.log(cartItem);
addToCartBt.addEventListener("click", () => {
    productCost= parseFloat(product_price) * count;
    console.log("productCost "+ productCost);
    document.getElementById("empty-msg").style.display="none";
    document.querySelector(".cart-items").style.height="min-content";
    cartItem.querySelector("#price-count").innerHTML=`$${product_price} X ${count} <b> $${productCost} </b>`;
    // console.log(cartItem.getElementById("#price-count").textContent);
    cartItem.style.display="flex";
    document.getElementById("checkoutBt").style.display="block";
    document.getElementById("cart-notifications").textContent=1;
    document.getElementById("cart-notifications").style.display="block";
});


let deleteItemBt = document.getElementById("deleteItemBt");
deleteItemBt.addEventListener("click", () => {
    document.getElementById("empty-msg").style.display="block";
    document.querySelector(".cart-items").style.height="200px";
    document.getElementById("checkoutBt").style.display="none";
    document.getElementById("cart-notifications").style.display="none";
    cartItem.style.display="none";
});

// handel light box 
let lightBoxImageThumnails;
const lightBox = document.querySelector(".light-box");
let lightBoxCoverImg;

coverImg.addEventListener("click", () =>{
    lightBox.style.display="grid";
    lightBoxImageThumnails = document.querySelectorAll(".light-box .image-thumnails span");
    console.log("lightBoxImageThumnails[0] "+ lightBoxImageThumnails[0].src);
    lightBoxCoverImg = document.querySelector(".light-box .inner img");
    // handel right button
    let rightBt = document.querySelector(".light-box .inner .right");
    let counter=0;

    rightBt.addEventListener("click", () => {
        console.log("rightBt "+ rightBt)
        if (counter < 3){
            counter++;
            lightBoxCoverImg.src = lightBoxImageThumnails[counter].querySelector("img").src.replace("-thumbnail","");
            lightBoxImageThumnails[counter-1].classList.remove("selected");
            lightBoxImageThumnails[counter].classList.add("selected");
        }
        console.log("counter from right button" + counter);
    });
    console.log("rightBt "+ rightBt)
    // handel left button
    let leftBt = document.querySelector(".light-box .inner .left");
    leftBt.addEventListener("click", () => {
        if(counter > 0){
            counter--;
            lightBoxCoverImg.src = lightBoxImageThumnails[counter].querySelector("img").src.replace("-thumbnail","");
            lightBoxImageThumnails[counter+1].classList.remove("selected");
            lightBoxImageThumnails[counter].classList.add("selected");
        }
        console.log("counter " + counter);
    });
    // handel close button
    let closeBt = document.querySelector(".light-box .inner .closeBt");
    closeBt.addEventListener("click", () => {
        lightBox.style.display = "none";
    });
});

// mobile nav menu
const menuBt = document.getElementById("menuBt");
const navbar = document.querySelector("header div nav");

menuBt.addEventListener("click", () => {
    if (navbar.style.display === "" || navbar.style.display === "none"){
        navbar.style.display = "flex";
        document.body.style.overflow = 'hidden';
    }
});

const navCloseBt = navbar.querySelector(".closeBt");
navCloseBt.addEventListener("click", () => {
    navbar.style.display = "none";
    document.body.style.overflow = 'auto';

});

// handel

const rightBtArrow = document.querySelector(".product-preview-images .right");
const leftBtArrow = document.querySelector(".product-preview-images .left");
coverImg
let counter=0;

rightBtArrow.addEventListener("click", () => {
    console.log("rightBt "+ rightBtArrow)
    if (counter < 3){
        counter++;
        coverImg.src = imageThumnails[counter].querySelector("img").src.replace("-thumbnail","");
        imageThumnails[counter-1].classList.remove("selected");
        imageThumnails[counter].classList.add("selected");
    }
    console.log("counter from right button" + counter);
});
console.log("rightBt "+ rightBtArrow)
// handel left button
leftBtArrow.addEventListener("click", () => {
    if(counter > 0){
        counter--;
        coverImg.src = imageThumnails[counter].querySelector("img").src.replace("-thumbnail","");
        imageThumnails[counter+1].classList.remove("selected");
        imageThumnails[counter].classList.add("selected");
    }
    console.log("counter " + counter);
});

