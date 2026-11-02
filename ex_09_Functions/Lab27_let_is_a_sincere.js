let a=10;
console.log(a);
function varCheaterProof(){
    let a=20;
    console.log(a);
    if(true){
        let a=30;
        console.log(a);  // proof of cheating
    }
    console.log(a);
}

varCheaterProof();
