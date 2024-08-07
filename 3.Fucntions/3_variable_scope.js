// inside function --> local scope
// outside function --> global scope


// inside function without var keyword: global scope
function test() {
    a=20;
}

test();
console.log(a); // 20 --> a is global variable

// let --> block scope, can be used only inside the block where it is defined

function display_scopes() {
    // declare variable in local scope
    let message = "local";

    if (true) {

        // declare block-level variable
        let message = "block-level";

        console.log(`inner scope: ${message}`);
    }

    console.log(`outer scope: ${message}`);
}

display_scopes();