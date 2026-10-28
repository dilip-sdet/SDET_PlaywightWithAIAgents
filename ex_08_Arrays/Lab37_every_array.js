let num1 = [80,86,91,84,89];
let num2 = [90,89,86,100,88];
let isDistinction1 = num1.every(num1 => (num1<=100 && num1>=85));
let isDistinction2 = num2.every(num2 => (num2<=100 && num2>=85));
console.log(isDistinction1);
console.log(isDistinction2);