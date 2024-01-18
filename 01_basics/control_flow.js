// note these value are consider as false 
/* falsy value :- 
       false , 0 , -0 , BigInt 0n , "empty string" , null , undefine , Nan
       rest all are true value 
       eg. "0" , 'false' , " " , {} , [] 

*/

//      ?? nullish coalescing operator jo pehla vallue shi lg rha h wo lenge 
let val1;
//val1 = 5 ?? 10;
//console.log(val1); // -> 5
val1 = null ?? 10;
console.log(val1);  // -> 10

//      Terniary operator ?
//condition ? true : false
let sahil = 10;
sahil >= 80 ? console.log('more') : console.log('less'); // -> less
