//Check age using promise .then and .catch?

let checkAge = (age) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                resolve("Eligible!");
            }
            else {
                reject("Not Eligible!");
            }
        }, 2000)
    });
};

checkAge(20)
.then((result) => console.log(result))
.catch((error) =>  console.log(error));

checkAge(15)
.then((result) => console.log(result))
.catch((error) =>  console.log(error));