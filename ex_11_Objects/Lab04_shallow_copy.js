let user1 = {
    name : "Dilip Kumar K",
    address : {
        city : "Bangalore"
    }
}
let user2 = {...user1};
user2.name = "Himadri";
//user2.city = "Mysore";
user2.address.city = "Mysore";
console.log("-----------------user1---------------------")
console.log(user1.name);
console.log(user1.address);
console.log(user1.address.city);
console.log("------------------user2--------------------")
console.log(user2.name);
console.log(user2.address);
console.log(user2.address.city);