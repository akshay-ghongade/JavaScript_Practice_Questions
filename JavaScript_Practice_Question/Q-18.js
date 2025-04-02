//reverse string ?
let revString = (str) => {
    
    let string = str.split("").reverse().join("");
    str.toString();
    return string;
};
console.log(revString("coding"));
