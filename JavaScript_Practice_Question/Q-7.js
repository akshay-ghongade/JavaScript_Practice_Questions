//Write a JavaScript function that reverses a number.

// Define a function named rev_String that takes a parameter num
function rev_String(num){
    num = num + "";         // Convert the input number to a string
    return num.split("").reverse().join("");
    // Split the string into an array of characters, reverse the array, and then join the characters back into a string

}
console.log((Number(rev_String(12345))));
// Convert the reversed string back to a number and log it to the console
