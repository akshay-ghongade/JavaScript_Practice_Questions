//Fetch Data using Promise .then?

let fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Ram Krushna Hari"), 1000);
    })
    .then((data) => {
        return new Promise((resolve) => {
            setTimeout(() => resolve("User Name: " + data), 2000);
        });
    }); 
};
fetchData()
.then((result) => console.log(result));//User Name: Ram Krushna Hari