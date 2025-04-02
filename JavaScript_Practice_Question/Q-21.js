//Promise Reverese Delay?

let reverseDelay = (str) => {
    let revStr = str.split("").reverse().join("");
    return new Promise((resolve) => {
        setTimeout(() => resolve(revStr), 2000);
    });
};

async function outPut(str) {
    let result = await reverseDelay(str);
    console.log(result);
};
outPut("gniK");

//=========================================

let squareDelay = (num) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(num * num), 2000);
  });
};

squareDelay(4)
.then((result) => console.log(result));//16


