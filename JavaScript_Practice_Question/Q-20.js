//Promsie simple question?

let checkNumber = (num) => {
    return new Promise((resolve, reject) => {
        if (num > 0) {
            resolve(`${num} is Positive`);
        }
        else {
            reject(`${num} is Not positive`);
        }
    });
};
checkNumber(-3)
.then((result) => console.log(result))
.catch((error) => console.log(error));

checkNumber(1)
.then((result) => console.log(result))
.catch((error) => console.log(error));