let sum = (...num)=>{
    let value = 0;
    for(let i=0;i<=num.length-1;i++){
        value = value + num[i]
    }
    console.log(value);
}
num=[10,20,30,40,50]
sum(...num)
