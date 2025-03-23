//Q) Find the maximum number in array?

let findMax = (arr) => {
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
};
console.log(findMax([1,9,2,4,10,8]));