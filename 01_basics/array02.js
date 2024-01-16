const heroes = ['thor' , 'ironman' , 'spider'];
const temp = [1 , 2 , 3];
// now how to mix these array
const all = heroes.concat(temp);
// or we can also do so by 
const all2 = [...heroes , ...temp]; // ... this is also known as spread 

// note - agar array k andar array aur hum unko kholna chahte h .. to hum aisa kar skte  h with the help of .flat()