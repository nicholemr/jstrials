"use strict";


// 1. isHometown

// Define your function here
function isHometown(town){
    if (town === 'Miami'){
        return true;
    }else{
        return false;
    }
}

// console.log(isHometown('oakland'));
// console.log(isHometown('Miami'));

// 2. getFullName
function getFullName(firstname,lastname){
    return firstname +' '+ lastname
}

// console.log(getFullName('nichole','reyes'))
// Define your function here


// 3. calculateTotal
function calculateTotal(basePrice,State,Tax=0.05){
    let fee = 0;
    let subtotal = basePrice * (1 + Tax);
    if (State === 'CA'){
        fee = 0.03 * subtotal;
    } else if (State === 'PA') {
        fee = 2;
    } else if (State === 'MA'){
        if (basePrice <= 100){
            fee = 1;
        } else {
            fee = 3
        }
    }
    return subtotal + fee
}
let tax = 1
console.log(calculateTotal(1,'CA',tax))
console.log(calculateTotal(1,'PA',tax))
console.log(calculateTotal(101,'MA',tax))