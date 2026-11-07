function checkLogin(){
    return new Promise(function(resolve,reject){
        resolve("Login is successful")
    })
}
function statusCheck(){
    return new Promise(function(resolve,reject){
        resolve("Status is updated successful")
    })
}
function accountCheck(){
    return new Promise(function(resolve,reject){
        resolve("Account is updated successful")
    })
}
function transitionCheck(){
    return new Promise(function(resolve,reject){
        resolve("Transition are successful")
    })
}

checkLogin().then(function(response){
    console.log(response);
    return statusCheck();
}).then(function(response){
    console.log(response);
    return statusCheck();
}).then(function(response){
    console.log(response);
    return accountCheck();
}).then(function(response){
    console.log(response);
    return transitionCheck()
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("Exceution is completed")
})

