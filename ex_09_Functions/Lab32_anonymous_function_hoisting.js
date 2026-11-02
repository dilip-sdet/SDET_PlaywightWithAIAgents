//hoistingFunction(); // hoistingFunction is not a function. Its anonymous function. So its not hoisted

var hoistingFunction = function(){
    console.log("Hoisting Function");
}

hoistingFunction();