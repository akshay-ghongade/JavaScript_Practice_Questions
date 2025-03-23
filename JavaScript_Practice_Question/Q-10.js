//Question) Remove duplicate element of array?

let removeDuplicate = (arr) => {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
};
console.log(removeDuplicate([10,20,20,30,40,40,50]));

