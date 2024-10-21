//task 2
const priceElement = document.getElementById("product-price"); //select price element from html

const sizeSelector = document.getElementById("size-selector");//select dropdown from html

let selectedSize = ""; //global declaration allows usage throughout code

sizeSelector.addEventListener("change", (event) => { //adding event listener to reflect price for selected size
    const selectedPrice = event.target.value; //identifying price of size
    priceElement.textContent = `$${selectedPrice}`; //displaying corresponding price
    
});//(also corrected comment in html file in this commit)