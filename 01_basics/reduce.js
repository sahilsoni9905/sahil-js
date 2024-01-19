const mynums = [1 , 2 , 3];
const myTotal = mynums.reduce(function (acc , currval) {
    console.log(`acc : ${acc} and currval : ${currval}`);
    return acc + currval
} ,  0)
console.log(myTotal); /*  acc : 0 and currval : 1
acc : 1 and currval : 2
acc : 3 and currval : 3
6 */