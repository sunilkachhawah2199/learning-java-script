// Qs. We are given array of marks of students. Filter out of the marks of students that scored 90+.
// (84,93, 64, 99, 86]


let marks = [84,93, 64, 99, 86];
let newArray= marks.filter( (val) =>{
    return val>90 ? true : false;
})

console.log(`toppers marks: ${newArray}`); // toppers marks: 93,99,91


/* q2: Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
Use the reduce method to calculate sum of all numbers in the array.
Use the reduce method to calculate product of all numbers in the array. */

let input= parseInt(prompt("Enter a number: "));

console.log(`number entered by the user: ${input}`);
let arr=[];
for(let i=1; i<=input; i++){
    arr.push(i);
}

let sum=arr.reduce( (prev, curr) => {
    return prev + curr;
})

console.log(`sum of all numbers in the array: ${sum}`);

let product=arr.reduce( (prev, curr) => {
    return prev * curr;
});

console.log(`product of all numbers in the array: ${product}`);