//Promise.all method?

let fetchName = () => {
    let myPromise1 = new Promise((resolve) => {
        setTimeout(() => resolve("Ram"), 1000);
    });
    let myPromise2 = new Promise((resolve) => {
        setTimeout(() => resolve("Sita"), 2000);
    });
    return Promise.all([myPromise1, myPromise2])
    .then((result) => `${result[0]} Loves ${result[1]}`);
};
fetchName()
.then((result) => console.log(result));//Ram Loves Sita

//==============================================================

//Promise.race method?

let fetchWithTimeout = () => {
    let promise1 = new Promise((resolve) => {
        setTimeout(() => resolve("Data Loaded"), 3000);
    });
    let promise2 = new Promise((reject) => {
        setTimeout(() => reject("Time Out"), 2000);
    });
    return Promise.race([promise1, promise2])
 
};
fetchWithTimeout()
.then((result) => console.log(result))
.catch((error) => console.log(error));//Time Out

//=========================================================

//sequential task ?

let sequentialProcess = () => {
    let task1 = new Promise((resolve) => {
        setTimeout(() => resolve("Step 1"), 1000);
    })
    return task1.then((result1) => {
        let task2 = new Promise((resolve) => {
            setTimeout(() => resolve("Step 2"), 1000);
        });
        return task2.then((result2) => `${result1} -> ${result2}`);
    });
};
sequentialProcess() 
.then((result) => console.log(result));

//=======================================================================

//sequential task two?

let stepByStep = () => {
    let step1 = new Promise((resolve) => {
        setTimeout(() => resolve("Ram"), 2000);
    });
    return step1.then((result1) => {
        let step2 = new Promise((resolve) => {
            setTimeout(() => resolve("Sita"), 1000);
        });
        return step2.then((result2) => `${result1} Loves ${result2}`);
    });
};
stepByStep()
.then((result) => console.log(result));




