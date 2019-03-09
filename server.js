// w/e mathlib.js exports put on the variable sqrt
var myMath = require('./mathlib');




console.log("I'm in Node Js");


// reutrn will "response back from a function"
//function will do some process and send back the response, thats the return keyword. It is to send back.

//in this example below, the return function, throws the object creted on the variable p1


function createProduct(){
    return{
        id:23,
        name: "Super random product",
        price: 42
    };
}

function init(){
    var res = myMath.sqrt(25)
;    console.log("Sqr ",res);

    var r1 = myMath.even(23);
    var r2 = myMath.even(824);
    console.log('evens?:', r1,r2);

    //try if
    // 42 it a valid int
    //42 it a valid float 
    // z its a valid int

    var q1 = myMath.itsValidInt(42);
    var q2 = myMath.itsValidFloat(42);
    var q3 = myMath.itsValidInt("z");
    console.log("valid int?" , q1, "valid float?", q2, "valid int?", q3);

    var p1 = createProduct();
    var p2 = createProduct();

}

init();