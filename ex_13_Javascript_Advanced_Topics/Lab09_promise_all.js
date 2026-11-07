let scenarioCreation = Promise.resolve("Scenario Creation is completed")
let testcaseCreation = Promise.resolve("Testcase Creation is completed")
let testExecution = Promise.resolve("Test Executio is completed")

Promise.all([scenarioCreation, testcaseCreation, testExecution]).then((response)=>{
    console.log(response);
}).catch(()=>{
    console.log("error to be handle");
}).finally(()=>{
    console.log("Code works successfully")
})
    