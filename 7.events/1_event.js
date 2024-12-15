let button2= document.querySelector("#button2");

button2.onclick= ()=>{
    console.log("Button2 Clicked");
}

// if we want to stop inline event then we have to use event.stopPropagation() method.
// if we handle same event inline and js file then js event will be executed, inline event will not be executed.
// if we handle same event 2 times in js file then last event will be executed.

// event listener ---------------------------

let button3= document.querySelector("#button3");

let fun =()=>{
    console.log("Button3 Clicked");
}

button3.addEventListener("click", fun);


// change theme with button question ----------------------------------
let body= document.querySelector("body");
let button4= document.querySelector("#theme");
let v=false;
let toggle= ()=>{
    v= !v;
    theme(v);
}
let theme= (v)=>{
    if(v==true){
        body.style.backgroundColor= "black";
    }else{
        body.style.backgroundColor= "white";
    }
}

// event listener
button4.addEventListener("click", toggle);