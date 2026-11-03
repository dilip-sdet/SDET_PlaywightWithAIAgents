let a = {
    status : "Fail",
}
let c = {
    Status : "Fail",
}
let b = {...a};
b.status = "Pass";
console.log(a["status"]);
let d = c;
d.Status = "Pass";
console.log(c["Status"])