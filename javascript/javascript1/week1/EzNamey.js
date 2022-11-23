const firstWords = ["Amazing ","Awesome ","Cool ","Polite ","Creative ","Magical ","Professional ","Unussual ","Perfect ","Incredible "];
const secondWords = ["corporation","company","team","solution","choice","band","workers","deal","productivity","development"];
const randomNumber = Math.floor(Math.random() * 10);
const randomNumber2 = Math.floor(Math.random() * 10);
const startupName = firstWords[randomNumber] + secondWords[randomNumber2];
console.log("The startup: " + '"' + startupName + '" ' + "contains "  + startupName.length + " characters.");