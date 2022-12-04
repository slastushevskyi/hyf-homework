function getFullName(firstname,surname,useFormalName) {
    if (useFormalName === 1) {
    return "Lord " + firstname + " " + surname;
    }
    else if (useFormalName === 2) {
        return "Lady " + firstname + " " + surname; // If person a woman
    }
    else {
        return firstname + " " + surname;
    }
}
let fullname1 = getFullName("Harold","Blåtand",1);
let fullname2 = getFullName("Lars","Rasmussen",0);
console.log(fullname1);
console.log(fullname2);






