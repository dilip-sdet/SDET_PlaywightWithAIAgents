let textMatrix = [["Login", "Pass", 200],
                  ["Checkout", "Fail", 404],
                  ["Search", "Pass", 180]];


for(i=0;i<=textMatrix.length-1;i++){
    for(j=0;j<=textMatrix[i].length-1;j++){
        process.stdout.write(textMatrix[i][j] + " ");
    }
    console.log(" ");
}