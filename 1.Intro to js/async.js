/*
Definition: Tasks can start and proceed without blocking the execution of other tasks.
Asynchronous code does not wait for a task to complete before moving to the next line. Instead, the task is handed off (e.g., to an I/O operation) and a callback or a promise handles the result when it’s ready.
This is non-blocking behavior.
setTimeout is a asynchronous operation
*/
// syntax
// setTimeout(function, time in milisecond)
console.log("start");
setTimeout(()=>{
    console.log("now asynchronous work done");
}, 2000)

console.log("end")