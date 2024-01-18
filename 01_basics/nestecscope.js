function one(){
    const username = 'sahil';
    function two(){
        const website = 'youtube';
        console.log(username);

    }
  //  console.log(website); // showing website not found 
    two();
}
one();
//+++++++++++++++++++++++ intresting ++++++++

addone(5)  //works fine even before we calling 
function addone(num){
    return num + 1;

}


addtwo(5);  // this will give error 
const addtwo = function(num){
    return num+2;
}

