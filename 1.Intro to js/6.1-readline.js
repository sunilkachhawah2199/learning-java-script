// readline is used to read from terminal
const readline= require('readline'); // import readline module

// to read user input create interface using readline.createInterface

const r1 = readline.createInterface({
    input: process.stdin,   // Reading input
    output: process.stdout  // Writing output (optional)
});


// to prompt for the use input use r1.question

r1.question('what is your name', (answer)=>{
    console.log(answer);
    r1.close();
});

// multiple inputs
rl.question('What is your name? ', (name) => {
    rl.question('How old are you? ', (age) => {
        console.log(`Hello ${name}, you are ${age} years old!`);
        rl.close();
    });
});
