let marks = [67,78,71,90,59];
let grade = marks.map((function(value){
    if(value>70){
        return "Pass";
    }else{
        return "fail";
    }
}))
console.log(grade);