//1
/*
const totalPriceMost = function (price) {
    const vatMost = price * 1.21;
    return vatMost;
};


const totalPriceFood = function (price) {
    const vatFood = price * 1.09;
    return vatFood;
};

const totalPrice = function() {
    totalPriceMost ();
    totalPriceFood ();
}

const result = totalPrice(10);
console.log(result);
*/

//2
const priceExMost = function (totalPrice) {
    const basePrice = totalPrice / 1.21;
    const vatAmount = totalprice - (totalPrice/1.21); 
    return [basePrice, vatAmount];
};


const priceExFood = function (totalPrice) {
    const basePrice = totalPrice / 1.09;
    const vatAmount = totalprice - (totalPrice/1.09); 
    return [basePrice, vatAmount];
};

const priceEx = function() {
    priceExMost ();
    priceExFood ();
}

const result = priceEX(10);
console.log(result);
