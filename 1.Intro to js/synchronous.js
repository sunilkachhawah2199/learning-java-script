// synchronous task stop all further tasks. all the tasks are executed when synchronous task completed
// tasks are executed sequentially
// Synchronous code blocks the program’s execution.
// reading a file, wrting a file is a synchronous work
console.log("Start");

function syncTask() {
    for (let i = 0; i < 1e9; i++) {} // Simulates a time-consuming task
    console.log("Synchronous Task Done");
}

syncTask();
console.log("End");


/* output
Start
Synchronous Task Done
End
*/