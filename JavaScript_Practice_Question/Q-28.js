// Fetch API's with error handling using .then.catch / async /await
//.then Approach
let fetchUser = () => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => {
        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }
        return response.json();
    })
    .then((data) => {
        console.log(`Name: ${data.name}`);
        console.log(`Eail: ${data.email}`);
    })
    .catch((error) => {
        console.log("Failed to fetch user");
    });
};
fetchUser();

//==========================================================================
//async/await Approach

let fetchApi = async () => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
            throw new Error("Failed to fetch user");
        }
        const data = await response.json();
        console.log(`Name: ${data.name}`);
        console.log(`Email: ${data.email}`);
    }
    catch (error) {
        console.log("Failed to fetch user");
    }
};
fetchApi();