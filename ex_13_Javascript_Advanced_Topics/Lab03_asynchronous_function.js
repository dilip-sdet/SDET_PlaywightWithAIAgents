let testCaseCreation = ()=>{
    console.log("Test case started");
}

let testCaseExecution = ()=>{
    setTimeout(()=>{
    console.log("Execute the Test Case")
    },5000);
}

let testCaseReview = ()=>{
    console.log("Test case Reviewed");
}

let featureBuild = ()=>{
    console.log("Feature build is ready");
}

testCaseCreation();
testCaseExecution();
testCaseReview();
featureBuild();
