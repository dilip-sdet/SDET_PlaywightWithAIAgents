let result = (status, callback)=>{
    console.log("Result disclose is in progress");
    callback();
}

let marks = [76,86,71,96,82,90];
result("Pass", ()=>{
    console.log("Result is disclosed");
    let total = (marks.reduce((a,b) =>(a+b)));
    let score = (total/600)*100;
    console.log("Your score is ", score);
})

