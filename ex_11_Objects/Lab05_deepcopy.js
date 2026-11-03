let user1 = {
    name : "Dilip Kumar K",
    address : {
        city : "Bangalore"
    }
}
let user2 = structuredClone(user1);
user2.name = "Himadri";
user2.address.city = "Mysure";
console.log("-----------------user1---------------------")
console.log(user1.name);
console.log(user1.address);
console.log(user1.address.city);
console.log("------------------user2--------------------")
console.log(user2.name);
console.log(user2.address);
console.log(user2.address.city);


//Nothing will change in deep copy
//user 1 value will not get changed
