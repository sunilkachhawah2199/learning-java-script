// create complete button with dom

let button= document.createElement("button"); // create button element
button.innerText= "Click me"; // set button text

button.style.backgroundColor= "red"; // set button background color
button.style.color= "white"; // set button text color

let div= document.querySelector("body"); // select div element
div.prepend(button); // add button to the div