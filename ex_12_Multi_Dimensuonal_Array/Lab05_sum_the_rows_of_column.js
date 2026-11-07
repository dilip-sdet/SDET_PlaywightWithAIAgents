let score = [[75,85,95],
             [88,78,98],               
             [68,84,79] 
            ]

let rowsum = score.map(value => value.reduce((a, b) => a + b));
console.log(rowsum);