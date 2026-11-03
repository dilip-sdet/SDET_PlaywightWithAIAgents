let str = "abc";
console.log(str.charAt(99));  // " "
console.log(str.at(99));      // undefined
console.log(str.charAt(-1));  //" "
console.log(str.at(-1));      //c