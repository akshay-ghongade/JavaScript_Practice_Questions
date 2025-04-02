//Promise Chaining .then Delay?

let chainDelay = (num) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(num * 2), 1000);
    })

    .then((double) => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(double * double), 2000);
        });
    });
};
chainDelay(3)
.then((result) => console.log(result));

//========================================================

let processNumber = (num) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(num * 3), 1000);
    })

    .then((cube) => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(cube * cube * cube), 1000);
        });
    });
};
processNumber(2)
.then((result) => console.log(result));//216