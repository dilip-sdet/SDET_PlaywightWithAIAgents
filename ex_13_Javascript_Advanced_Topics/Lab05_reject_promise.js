let apiCall = new Promise(function(resolve,reject){
    reject({page: "404 Page"})
})
apiCall.then(function(response){
    console.log(response)
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("I will fix the issue")
})

