// break , continue --> same as a java
//  when we use break inside nested loop, it will break the inner loop
// when we use continue inside nested loop, it will skip the current iteration of the inner loop


// using break with labels--------------------------------------------

// break can be used with labels to break out of nested loops

outerloop: for (let i = 1; i <= 3; i++) {

    innerloop: for (let j = 1; j <= 3; j++) {

        if (j === 3) {
            break outerloop;
        }

        console.log("i = " + i + ", j = " + j);
    }
}

// using break in switch statement--------------------------------------------
// break can be used to exit a switch statement


let fruit=String(prompt("Enter the fruit name:"));

switch(fruit){
    case "Banana":
        console.log("the fruit is Banana");
        break;
    case "Apple":
        console.log("the fruit is Apple");
        break;
    default:
        console.log("error")
}


// switch ---------------------------------------------------------------------

