//Q) Find the minimum number in array?

let findMin = (arr) => {
    let min = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
};
console.log(findMin([10,2,6,8,-2]));