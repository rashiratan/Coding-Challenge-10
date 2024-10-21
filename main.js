//task 2
const priceElement = document.getElementById("product-price"); //select price element from html

const sizeSelector = document.getElementById("size-selector");//select dropdown from html

let selectedSize = ""; //global declaration allows usage throughout code

sizeSelector.addEventListener("change", (event) => { //adding event listener to reflect price for selected size
    const selectedPrice = event.target.value; //identifying price of size
    priceElement.textContent = `$${selectedPrice}`; //displaying corresponding price
    
    //task 3
    selectedSize = sizeSelector.options[sizeSelector.selectedIndex].text; //selecting size text
    updateDropdown(); //to update options for stock availability
    
    //task 4
    if (buyButton.disabled === true) {alert('Sorry, this item is out of stock');};
    //display alert if item out of stock

});//(also corrected comment in html file in this commit)


//task 3

const buyButton = document.getElementById("buy"); //seleting buy button

//setting stock values
let smallStock = 10;
let mediumStock = 15;
let largeStock = 7;

function checkButton(stock) { //checking button status: enabled/disabled
    if (stock > 0) {
        buyButton.disabled = false;
            }
    else {
        buyButton.disabled = true;
         }
    };

function updateDropdown() //defining function to update dropdown for stock availability
    {
        const options = sizeSelector.options; //creating array of options
    
        options[0].textContent = `Small: ${smallStock > 0 ? 'In stock' : 'Out of Stock'}`;
        options[1].textContent = `Medium: ${mediumStock > 0 ? 'In stock' : 'Out of Stock'}`;
        options[2].textContent = `Large: ${largeStock > 0 ? 'In stock' : 'Out of Stock'}`;
    
        //checking button for each option
        if (selectedSize.includes("Small")) {
            checkButton(smallStock); 
        }
        else if (selectedSize.includes("Medium")) {
            checkButton(mediumStock);
        }
        else if (selectedSize.includes("Large")){
            checkButton(largeStock);
        }
    };
    
//task 4

//adding event listener for buy button clicked
buyButton.addEventListener("click", () =>{
    //redefining selected size for case where user does not change dropdown selection
    selectedSize = sizeSelector.options[sizeSelector.selectedIndex].text; 

    //creating cases for different sizes selected
    if (selectedSize.includes("Small")) {
        smallStock--; //reducing stock
        alert("Order placed successfully"); //displaying alert
        checkButton(smallStock); //check button status for next purchase
    }
    else if (selectedSize.includes("Medium")) {
        mediumStock--;
        alert("Order placed successfully")
        checkButton(mediumStock);}
    else if (selectedSize.includes("Large")){
       largeStock--;
       alert("Order placed successfully")
       checkButton(largeStock);
    }
    //updating dropdown options per stock availability
    updateDropdown();
}
)

//initial update for dropdown options
updateDropdown();

//task 5 skipped