//Ek function banao jo ek array of numbers aur ek target number le, aur array ke do aise numbers ke indices return kare jo add hoke target ke barabar ho.

let twoSum = (arr, target) => {
    let n = arr.length;
    
    for (let i = 0; i < n ; i++) {
        for (let j = 1; j < n; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
};
console.log(twoSum([3,2,4], 6));
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([4, 5, 1, 8], 9));
console.log(twoSum([1,5,3,2], 8));

//using hash maping 

// let twoSum = (arr, target) => {
//     let map = {};
//     for (let i = 0; i < arr.length; i++) {
//         let complement = target - arr[i];
//         if (map[complement] !== undefined) {
//             return [map[complement], i];
//         }
//         map[arr[i]] = i;
//     } 
//     return [];
// };
// console.log(twoSum([1,5,3,2], 8));