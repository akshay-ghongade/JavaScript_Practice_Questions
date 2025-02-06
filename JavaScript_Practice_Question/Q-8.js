//Write a JavaScript function that checks whether a passed string is a palindrome or not?

function isPalindrome(str){
    let len = 0;
    while(str[len]!== undefined){
        len++;
    }
    let left = 0;
    let right = len -1;

    while(left < right){
        let leftChar = str[left] >= 'A' && str[left] <= 'Z'? str[left].toLowerCase() : str[left];
        let rightChar = str[right] >= 'A' && str[right] <= 'Z'? str[right].toLowerCase(): str[right];

        if(leftChar !== rightChar){
            return false;
        }
        left ++;
        right --;
    }
    return true;
}
console.log(isPalindrome("room"));
console.log(isPalindrome("Chand"));
console.log(isPalindrome("1MaDaM1"));
console.log(isPalindrome("Racecar"));


    