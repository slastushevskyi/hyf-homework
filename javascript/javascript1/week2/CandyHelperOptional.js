const boughtCandyPrices = [];
let totalPrice;
let sweet = "sweet";
let chocolate = "chocolate";
let toffee = "toffee"; 
let chewingGum = "chewingGum";
const amountToSpend = Math.random() * 100; 
function addCandy(candyType,weight) {

    if (candyType === "sweet") { 
        boughtCandyPrices.push(weight * 0.5);       
    }
    else if (candyType === chocolate) { //now candyType working both with variable and string ¯\_(ツ)_/¯
        boughtCandyPrices.push(weight * 0.7);   
    }
    else if (candyType === "toffee") {
        boughtCandyPrices.push(weight * 1.1);   
    }
    else if (candyType === "chewingGum") {
        boughtCandyPrices.push(weight * 0.03);   
    }
    else {
        console.log(`Please enter valid candy name`);
    }
}
addCandy("sweet",20);
addCandy("chocolate",60);
addCandy("toffee",15);
addCandy("chewingGum",45);
addCandy("sour", 25); //invalid candy name
function boughtSum(boughtCandyPrices) {
    totalPrice = 0;
    for (let i = 0; i < boughtCandyPrices.length; i++) {
        totalPrice += boughtCandyPrices[i];
    }
    console.log(totalPrice); 
}
function canBuyMoreCandy() {
    if (totalPrice >= amountToSpend) {
        console.log("Enough candy for you!");
    }
    else {
        console.log("You can buy more, so please do!");
    }
}
console.log(boughtCandyPrices);
console.log(amountToSpend);
boughtSum(boughtCandyPrices);
canBuyMoreCandy();

