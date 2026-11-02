var a=10;
console.log(a);
function varCheaterProof(){
    var a=20;
    console.log(a);
    if(true){
        var a=30;
        console.log(a);  // proof of cheating
    }
    console.log(a);
}

varCheaterProof();
