let LoginCheck = new Promise(function(resolve, reject){
    resolve("Login worked successfully")
})

let statusCheck = new Promise(function(resolve, reject){
    resolve("Status updated successfully")
})

let accountCheck = new Promise(function(resolve, reject){
    resolve("Accounts are updated successfully")
})

let transistionCheck = new Promise(function(resolve, reject){
    resolve("Transitions are successfully")
})

LoginCheck.then(function(response){
    console.log(response);
    return statusCheck;
}).then(function(response){
    console.log(response);
    return accountCheck;
}).then(function(response){
    console.log(response);
    return transistionCheck;
}).then(function(response){
    console.log(response);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("Execution is completed");
})

