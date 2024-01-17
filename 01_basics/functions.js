function sayMyname(){
    console.log('sahil');
}
sayMyname();
//ab kuch basic simple do number ko add karna wagera
//sirf basic baat hi hui is lecture m aur jyadatar hum pehle hi pdh chuke h 

function temp(...num1){   // ab yha isko spread nhi rest operator bola jata h ...mytlb jo  bhi mila usko ek bundle bna k apne m rkh lo
    return num1
}
console.log(temp(100 , 400 , 4004));  // -> [ 100, 400, 4004 ]


//note :- let and const scope k andar kaam krta h but var uske bhar bhi kaam kr skta h ...isliye hume nhi hi use krna chahiye var