let products =[
    ['Молоко', 35],
    ['Хліб', 18],
    ['Масло', 85],
    ['Ковбаса', 140],
    ['Кава', 250]
];

function sum() {
   let total = 0;
   for(let i = 0; i < products.length; i++){
    let name = products[i][0];
    let price = products[i][1];
    total += products[i][1];
    if(price <= 40){
        console.log((i +1), name, price, ':)' );
    } else if (price >= 120) {
        console.log((i + 1),name, price, ':(' );
    } else {
        console.log((i + 1), name, price, ';)' );
    }
   }
   console.log(total);
   return sum;
}
sum();

/*let sum = 0;

for (let i = 0; i < products.length; i++) {
    let name = products[i][0];
    let price = products [i][1];
 
if(price <=20){
    console.log(i + 1,name,price, ':)' );
} else if (price >= 100){
    console.log(i + 1,name.price, ':(' );
} else {
    console.log(i + 1,name,price);
}
sum +=price;

}
console.log(sum);
*/