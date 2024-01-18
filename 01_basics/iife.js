// bnate hi function invoke ho jaye 
// function chai(){
//     console.log('db connected');
// }
// chai();
// agar hum ise bnate hi execute krana chahte hai to wo hum ek aur tarike se kar sakte h 



// named iifi ....kyuki function ka naam h kuch
(function chai(){
    console.log('db connected');
})();  // =>  db connected


// unnamed iifi 
( (name) => {
    console.log(`hello bhai kaise ho ${name}`);
}
)('sahil');  // -> hello bhai kaise ho sahil