let div=document.querySelector("div"); // select all div children of the all div

let withClass= document.querySelector(".class"); // select all div with class name class

console.log(div); // return html collection
let id= div.getAttribute("id"); // we can get any Attribute using this

let cla= div.getAttribute("class");
console.log(`id attribute is: ${id}`);
console.log(`class attribute is: ${cla}`);

// set attribute ----------------------------------------------------------------

div.setAttribute("id","newId"); // set new id to the div

console.log(`new changed id attribute is ${div.getAttribute("id")}`); // return new id