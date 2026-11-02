function myName(){
    let name = "Dilip Kumar K";
    console.log(name);
    function callMyName(){
        console.log(name);
        return function nameCalled(){
            console.log(name);
        }
    }
    return callMyName;
}
let myname = myName();
let mine = myname();
mine()
