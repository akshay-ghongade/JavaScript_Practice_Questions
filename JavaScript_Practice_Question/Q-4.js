//Q => Write a JavaScript program to get the current date.
//Expected Output :
//mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

let today = new Date();        //get the current Date.
let dd = today.getDate();      //get the day of the Month.
let mm = today.getMonth() + 1; //get the month Adding 1 bcoz month are zero based.
let yyyy = today.getFullYear();//get the year.

//Add leading zero if the day in less than 10.
if(dd < 10){
    dd = "0" + dd;
}
//Add leading zero if the Month in less than 10.
if(mm < 10){
    mm = "0" + mm;
}
//Format the date as mm/dd/yyyy and log it.
today = mm +"/"+ dd +"/" + yyyy;
console.log(today);
//Format the date as dd/mm/yyyy and log it.
today = dd +"-"+ mm +"-" + yyyy;
console.log(today); 
