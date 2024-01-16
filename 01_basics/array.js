const myArr = [0 , 1 , 2 , 3 , true , 'sahil'];
console.log(myArr[0]);
// when we try to copy a array the new one get a shallow copy(i.e it follow the same refference point )
// another way to make a array 
const myArr2 = new Array(1 , 2 , 3);
//Array methods
myArr.push(6) ; // it push jo normally hota h 
myArr.unshift(9); // ye aage se insert krta hai 
const newArr = myArr.join(); // it form all the array element to a single string which are seperated by commas
console.log(newArr);

//++++++++   slice and splice ++++++++++  *****very important  **********
/* slice jo h wo (a , b) part ko dikhane ke liye use hota h  aur splice bhi a to b(including) ke liye use hota h aur wo utna
      array ko original part se hta deta i.e wo splice usko kaat deta h 

*/