//Write a JavaScript program to calculate multiplication and division and Addition and Substraction of two numbers (input from the user).

function addBy(){
    num1 = parseFloat(document.getElementById("first").value);
    num2 = parseFloat(document.getElementById("second").value);

    document.getElementById("result").innerHTML= "The Resutl is : " + (num1 + num2); 
}
function SubBy(){
    num1 = parseInt(document.getElementById("first").value);
    num2 = parseInt(document.getElementById("second").value);

    document.getElementById("result").innerHTML= "The Result is : " + (num1 - num2); 
}
function multiplyBy(){
    num1 = document.getElementById("first").value;
    num2 = document.getElementById("second").value;

    document.getElementById("result").innerHTML= "The Result is : " + (num1 * num2);
}
function divideBy(){
    num1 = document.getElementById("first").value;
    num2 = document.getElementById("second").value;
    document.getElementById("result").innerHTML= "The esult is : " + (num1 / num2);
}

