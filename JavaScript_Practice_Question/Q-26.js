//paralal or sequantial mix task? 

let mixFlow = () => {
    let task1 = new Promise((resolve) => {
        setTimeout(() => resolve("Begin"), 2000);
    });
    return task1.then((result1) => {
        let task2 = new Promise((resolve) => {
            setTimeout(() => resolve("Process"),1000);
        });
        let task3 = new Promise((resolve) => {
            setTimeout(() => resolve("Finish"), 3000);
        })
        return Promise.all([task2, task3]).then((result) => {
            return `${result1} -> ${result[0]} -> ${result[1]}`;
        });
    });
};
mixFlow()
.then((result) => console.log(result));

//======================================================================

let hybridFlow = () => {
    let task1 = new Promise((resolve) => {
        setTimeout(() => resolve("Load"), 1000);
    });
    return task1.then((result1) => {
        let task2 = new Promise((resolve) => {
            setTimeout(() => resolve("Run"), 2000);
        });
        let task3 = new Promise((resolve) => {
            setTimeout(() => resolve("Complete"), 1000);
        });
        return Promise.all([task2, task3]).then((result) => {
            return `${result1} -> ${result[0]} -> ${result[1]}`;
        });
    });
};
hybridFlow()
.then((result) => console.log(result));

