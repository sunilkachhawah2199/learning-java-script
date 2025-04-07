// syntax feature built on top of promise.
// allow writing of asynchronous code in a synchronous style
// we must use await inside an async function.
// errors are handled using try-catch block in synchronous method


// promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 1: Fetching data...");
            let success = true; // Change to false to simulate failure
            if (success) resolve("Data fetched");
            else reject("Failed to fetch data");
        }, 2000);
    });
}


// asynchronous function

async function main() {
    try {
        const result = await fetchData(); // Waits for fetchData to resolve
        console.log(result);
        console.log("All tasks completed!");
    } catch (error) { // run when rejected
        console.error("Error:", error);
    }
}

main();