
/*
const promiseOne = new Promise( function(resolve , reject){
    // do an assync task
    // db calls , cryptography
    setTimeout(function(){
        console.log('assync task is complete ');
        resolve() ;  // to connect it with .then
    } , 1000)
});

// now we are going to consume that promise 

// resolve has a connection with .then()
promiseOne.then(function(){
    console.log('promise consumed');
});

// can also be done by
new Promise(function(resolve , reject){
    setTimeout(() => {
        console.log('assync task 2');
        resolve();
        
    }, 4000);
   
})
.then(function(){
    console.log('promise 2 consumed');
})

*/

// now lets talk about it more
/*
const promisethree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "sahil", email: 'sahil@gmail.com' });
    })
})
promisethree.then(function (user) {
    console.log(user);

})

const promisefour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "sahil", email: 'sahil@gmail.com' });
        }
        else {
            reject('Error upps');
        }

    }, 1000)
})
// when we do chaining ek ka return agle me pass hota h 
promisefour.then((user) => {
    console.log(user);
    return user.username;
}).then((myUsername) => {
    console.log(myUsername);
}).catch(function (error) {
    console.log(error);
}).finally(() => {
    console.log('the promise is either resolved or rejected');
})
*/

const promisefive = new Promise(function (resolve, reject) {
    let error = true;
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "javascript", email: 'sahil@gmail.com' });
        }
        else {
            reject('js went wrong');
        }

    }, 1000)
});
// there is one more way
async function consumePromiseFive() {
    try {
        const response = await promisefive;
        console.log(response);
    } catch (error) {
        console.log(error);

    }
}
consumePromiseFive();


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))