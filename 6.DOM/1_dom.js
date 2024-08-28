let div= document.querySelector("h1");
console.dir(div); // return dom object
console.log(div); // return html element

console.log(div.innerText); // return text content of the element


// question 1 --> manipulate text and replace it with new text

let myAdd="is a student";

let get=div.innerText;
div.innerText=get+" "+myAdd;


// question 2 --> assign unique value to all div children
div= document.querySelectorAll(".divi");
div[0].innerText="first";
div[1].innerText="second";
div[2].innerText="third";