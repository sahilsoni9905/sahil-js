const user = {
    username : 'sahil',
    price : 999,
    welcomeMsg : function(){
       // console.log(`hi welcome to our website ${this.username}`);
       // console.log(this);  // ->  { username: 'sahil', price: 999, welcomeMsg: [Function: welcomeMsg] }
    }
}
//user.welcomeMsg()   // -> hi welcome to our website sahil
console.log(this);  // -> {}  in case of node env we get empty but when we console and run this we will get many things 


//++++++++++++++++++++++++++ IMPORATANT ++++++++++++++++++++++++++++++++
/* IF WE USE THIS INSIDE OF A FUNCTION WE GET ERROR OR UNDEFINE  i.e this work perfectly under object but not under function */

// function hello(){
//     let username = 'sahil';
//     console.log(this.username);

// }
// hello();    // ->undefined

//++++++++++++++++++++++++++++++++++++   ARROW FUNCTION ++++++++++++++++++++++

const chai = () => {
    let username = 'sahil';
    console.log(this.username);

}
// one more thing u should know about arrow function 

const addTwo =  (num1 , num2) => {
    return num1 + num2;
}
// we can remove return if we change parenthesis by curly bracket

const dojoro = (num1 , num2) => (num1 + num2);