//hoistingFunction();  // hoistingFunction is not a function. Its arrow function. So its not hoisted

var hoistingFunction = ()=>{
    console.log("Hoisting Function");
}

hoistingFunction();

//Arrow function with let / const follows TDZ rule