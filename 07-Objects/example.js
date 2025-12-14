const products = [
    {name:"laptop", price:999},
    {name:"phone", price:888}
];

const names = products.map(function(product){
    return product.name

});

console.log(names);

const prices = products.map(function(elem){
    return elem.price;
});

console.log(prices);
