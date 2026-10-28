let marks = [67,78,71,90,59];
let grade = marks.filter((function(value){
    return value>70;
}))
console.log(grade);