function add(){
    let num1 = parseInt(document.getElementById("num1").value)
    let num2 = parseInt(document.getElementById("num2").value)
    let result = num1 + num2

    document.getElementById("result").innerHTML = "<b>Result = </b>" + result;
}

function subtract(){
    let num1 = parseInt(document.getElementById("num1").value)
    let num2 = parseInt(document.getElementById("num2").value)
    let result = num1 - num2

    document.getElementById("result").innerHTML = "<b>Result = </b>" + result;
}

function multiply(){
    let num1 = parseInt(document.getElementById("num1").value)
    let num2 = parseInt(document.getElementById("num2").value)
    let result = num1 * num2

    document.getElementById("result").innerHTML = "<b>Result = </b>" + result;
}

/*
function sayHi()
{
    console.log("Hi");
}
function sayHello()
{
    console.log("Hello");
}
*/
add()
subtract()
multiply()

//sayHi()
//sayHello()
