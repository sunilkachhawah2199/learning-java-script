// promise is cleaner way to handle asynchronous operation
/*
States of a Promise:
1. Pending: The initial state (task is not completed yet).
2. Fulfilled: The task completed successfully (resolved).
3. Rejected: The task failed (error occurred).

errors are handled by .catch
*/

function fetchData(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log("data is fetching");
            let success=true; // Change to false to simulate failure
            if(success){
                resolve("data fetched successfully");
            }else{
                reject("failed to fetch data");
            }
        },3000)
    });
}

fetchData()
    .then((result) => {
        console.log(result); // Called when promise is resolved
    })
    .catch((error) => {
        console.error(error); // Called when promise is rejected
    });

// promise can be chaned to avoid callback hell
function step1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data is fetching");
            let success=true; // Change to false to simulate failure
            if(success){
                resolve("data fetched successfully in step 1");
            }else{
                reject("failed to fetch dat in step-1");
            }
        },2000)
    });
}


function step2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data is fetching");
            let success=true; // Change to false to simulate failure
            if(success){
                resolve("data fetched successfully in step 2");
            }else{
                reject("failed to fetch dat in step-2");
            }
        },1000)
    });
}


// Promise Chaining
step1()
    .then((result1) => {
        console.log(result1); // Log result of Step 1
        return step2();       // Return Step 2 promise
    })
    .then((result2) => {
        console.log(result2); // Log result of Step 2
        console.log("All steps completed successfully!");
    })
    .catch((error) => {
        console.error("Error:", error); // Handles any failure in the chain
    });