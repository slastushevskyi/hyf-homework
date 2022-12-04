const clothesToWear = whatTemperature(-15);
console.log(clothesToWear);
function whatTemperature(i) {
    if (i >= -15 && i <=0) {
        return "You've to put on so much clothes as you can!!!";
    }
    else if (i >= 1 && i <= 10) {
        return "You've to wear warm winter-jacket and winter-pants";
    }
    else if (i >= 11 && i <= 20) {
        return "You can wear casual jacket and pants";
    }
    else if (i >= 21 && i <= 35) {
        return "You've to wear shorts and t-shirt";
    }
    else {
        return "RUN, DUDE, RUUUUUN!!!"
    }
}