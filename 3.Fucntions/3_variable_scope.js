// inside function --> local scope
// outside function --> global scope


// inside function without var keyword: global scope
function test() {
    a=20;
}

test();
console.log(a); // 20 --> a is global variable

// let --> block scope, can be used only inside the block where it is defined, updation allowed, can't be re-declared

function display_scopes() {
    // declare variable in local scope
    let message = "local";

    if (true) {

        // declare block-level variable
        let message = "block-level";

        console.log(`inner scope: ${message}`); // block-level
    }
    // let message="new local"; --> not allowed

    console.log(`outer scope: ${message}`); // local
}

display_scopes();