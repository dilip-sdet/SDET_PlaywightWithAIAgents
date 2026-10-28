let original = [10,20,30,40];
let copyArray = [...original]; //using spread concept
original.push(50);
console.log(original);
copyArray.push(60);
console.log(copyArray);
let newArray = original;
console.log(newArray);
console.log(original);
newArray.push(60);
console.log(newArray);
console.log(original);//if we copy array via assigning, if you change the new array. same functionality happens on original array as well
