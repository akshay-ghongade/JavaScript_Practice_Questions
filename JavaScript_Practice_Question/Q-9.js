//Q) Write a JavaScript program to check two given integers whether one is positive and another one is negative.
function posNeg(x,y){
    if((x > 0 && y < 0) || (x < 0 && y > 0)){
        return true;
    }
    else{
        return false;
    }
}
console.log(posNeg(2,2));
console.log(posNeg(-2,2));
