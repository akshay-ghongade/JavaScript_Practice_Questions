//Array of Object Manipulations?

let processObjects = (arr) => {
    let double = arr.map((obj) => ({name: obj.name, score: obj.score * 2}));
    let filtered = double.filter((obj) => obj.score > 20);
    let sum = filtered.reduce((ac, obj) => ac + obj.score, 0);
    return sum;
};
console.log(processObjects([{name: "A", score: 10}, {name: "B", score: 25}, {name: "C", score: 15}]));