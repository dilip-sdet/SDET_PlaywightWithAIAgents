let apiCall = new Promise(function(resolve,reject){
    resolve({status:200});
})

apiCall.then(function(response){
    console.log(response);
})