//  Peter's house
let houseWidth = 8;
let houseDepth = 10;
let houseHight = 10;
let gardenSizeInM2 = 100;
const petersVolumeInMeters = houseWidth * houseDepth * houseHight; 
const petersHousePrice = petersVolumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
if (petersHousePrice >= 2500000) {
    console.log("Peter not going to pay extra money");
}
else if (petersHousePrice < 2500000) {
    console.log("Peter gonna pay to much");
}
//  Julia's house
houseWidth = 5;
houseDepth = 11;
houseHight = 8;
gardenSizeInM2 = 70;
const juliasVolumeInMeters = houseWidth * houseDepth * houseHight; 
const juliasHousePrice = juliasVolumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
if (juliasHousePrice >= 1000000) {
    console.log("Julia not going to pay extra money");
}
else if (juliasHousePrice < 1000000) {
    console.log("Julia gonna pay to much");
}