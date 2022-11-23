const dogYearOfBirth = 2010;
const dogYearFuture = 2027;
const dogYear = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = false;
if (shouldShowResultInDogYears == true) {
    console.log("Your dog will be " + dogYear * 7 + " dog years old in 2027.");
}
else if (shouldShowResultInDogYears == false) {
    console.log("Your dog will be " + dogYear + " human years old in 2027.");
}