// in this we will talk about singleton or constructor
const tinderUser = new Object() // here it is make by constructor and called singleton
tinderUser.id = '123abc';
tinderUser.name = 'samy';
tinderUser.isLoggedin = false;
//console.log(tinderUser);
/*  { id: '123abc', name: 'samy', isLoggedin: false } */

const reguralUser = {
    email : "abc@gmail.com",
    fullname : {
        userfullname : {
            firstname: 'sahil',
            lastname : 'soni',
        }

    }
}
//console.log(reguralUser.fullname.userfullname.lastname); // -> soni

//++++++++++++ we can also combine objects +++++++++++++++++++++++++++++++++++
const obj1 = {
    1 : 'a',
    2 : 'b',
}
const obj2 = { 3 : 'a' , 4 : 'b' }
const obj3 = {obj1 , obj2};
//console.log(obj3);   // ->  { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4 = Object.assign({} , obj1 , obj2); // all the value get assign to the parenthesis , we can also use more than 2 object
//console.log(obj4); // -> { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


//****** */ we can also solve by spread method i.e we have studied in array
const sahil = {...obj1 , ...obj2};
console.log(sahil);   // -> { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// in case of database when object come it come in the form of array 

const users = [
    
        {
            id: 1,
            email : 'aaa@gamil',
        },
        {
            id: 2,
            email : 'aafshda@gamil',
        },
        {
            id: 3,
            email : 'aafhsiuda@gamil',
        },   
]

// now there is one important thing which we are going to use in many project 
console.log(Object.keys(tinderUser));  // -> [ 'id', 'name', 'isLoggedin' ]
console.log(Object.values(tinderUser));  // [ '123abc', 'samy', false ] ,   we get a array for both of this 












































































































































































