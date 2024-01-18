const codinglang  = ["ruby" , "pythob" , "java" , "cpp"];
// lets see a very imp thing 
const values = codinglang.forEach( (item) => {
            return item
})
//console.log(values);  // -> undefined
// we got undefine that means that for each loop never return anything


//to solve this we can use filter 
const mynums = [1 , 2, 3, 4, 5 , 6 , 7, 8, 9, 10];
const newnums = mynums.filter(  (num) => {
    return num > 4;
})
//console.log(newnums); // => [ 5, 6, 7, 8, 9, 10 ]
//there is one more thing i.e map

// const new2 = mynums.map((num) => {
//     return num + 10;
// })


// chaining 
const new3 = mynums
            .map((num) => num*10)
            .map((num) => num + 1);

console.log(new3);/*  [
    11, 21, 31, 41,  51,
    61, 71, 81, 91, 101
  ] */
  // done till 25 min


