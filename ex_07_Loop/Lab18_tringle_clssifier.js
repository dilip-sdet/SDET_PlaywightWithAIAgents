let a = 5;
let b = 5;
let c = 5;

if(a===b && b===c && c===a){
    console.log("Equilateral triangle");
} else if(a===b || a===c || b===c){
    console.log("Isosceles Triangle");
} else{
    console.log("Scalene Triangle");
}