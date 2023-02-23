function add(){
    let num1 = parseInt(document.getElementById("num1").value)
    let num2 = parseInt(document.getElementById("num2").value)
    let result = num1 + num2

    document.getElementById("result").innerHTML = "<b>Result = </b>" + result;
}

function subtract(){
    let num3 = parseInt(document.getElementById("num3").value)
    let num4 = parseInt(document.getElementById("num4").value)
    let result = num3 - num4

    document.getElementById("result").innerHTML = "<b>Result = </b>" + result;
    
}

function multiply(){
    let num5 = parseInt(document.getElementById("num5").value)
    let num6 = parseInt(document.getElementById("num6").value)
    let result = num5 * num6

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
