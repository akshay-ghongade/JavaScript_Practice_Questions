//Q3.Write a JavaScript program that compares two strings using Promises. The program should include a function compareStrings that accepts two stringarguments and returns a Promise

function compairStrings (string1, string2){
    return new Promise((resolve,reject)=>{
        if(typeof string1 !== 'string'|| typeof string2 !== 'string'){
            reject("Both inputs must be strings.");
        }
        else if(string1 === string2){
            resolve("The string are equal.");
        }
        else{
            resolve("The strings are not equal.");
        }
    });
}
const str1 = "hello";
const str2 = 123;
compairStrings(str1,str2)
    .then(result => console.log(result))
    .catch(error => console.error(error));

