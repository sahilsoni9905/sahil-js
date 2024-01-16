let myDate = new Date();
console.log(myDate);  // -> 2024-01-16T09:58:17.226Z
console.log(myDate.toString()); //-> Tue Jan 16 2024 10:00:11 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());  // -> Tue Jan 16 2024
console.log(myDate.toISOString());   // -> 2024-01-16T10:02:25.340Z

// if we see its typeof then we get a object 
// we can also specify our own date
let mynewDate = new Date(2023 , 0 , 26); // in js month start from 0 
console.log(mynewDate.toDateString());  // -> Thu Jan 26 2023
// if we pass more data in mynewdate then it will correspond to hour and minute

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//now if we want to make a quiz and to check who submitted faster we can use Date.now

let myTimeStamp = Date.now();
console.log(myTimeStamp);  // -> 1705400021747 this is the milisecond from 1970

/*  we can also convert a date to a millisecond value just by .getTime eg . mynewDate.getTime() will give the milisecond value from 1970
           now if we want something from our date we can easily get by .get function eg . munewDate.getmonth() will give the month at that date 
*/