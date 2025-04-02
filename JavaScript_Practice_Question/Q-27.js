//Error handling wiht mix Flow?

let riskyTask = (success) => {
    let task1 = new Promise((resolve) => {
        setTimeout(() => resolve("Prep"), 1000);
    });
    return task1.then((result1) => {
        let task2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                if(success) {
                    resolve("Work");
                }
                else{
                    reject("Failed");
                }
            },1000);
        });
        let task3 = new Promise((resolve) => {
            setTimeout(() => resolve("Done"), 1000);
        })
        return Promise.all([task2, task3]).then((result) => {
            return `${result1} -> ${result[0]} -> ${result[1]}`;
        })
        .catch((error) => {
            throw error;
        });
    });
};
riskyTask(true)
.then((result) => console.log(result))
.catch((error) => console.log(error));

riskyTask(false)
.then((result) => console.log(result))
.catch((error) => console.log(error));
