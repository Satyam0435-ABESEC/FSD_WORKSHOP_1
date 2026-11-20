//synchronous
console.log("Start");
console.log("Middle");
console.log("End");
//asynchronous
console.log("\nStart");

setTimeout(() => {
    console.log("Hello after 2 seconds");
}, 2000);

console.log("End");