// add another class to content class
// we can replace old class using setAttribute but we want to keep both the class

let para= document.querySelector(".content");

console.log(para.classList); // return all class list

para.classList.add("newContent"); // add new class to the content class