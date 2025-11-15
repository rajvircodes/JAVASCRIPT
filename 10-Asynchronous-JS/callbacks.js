// CALLBACKS – Basic Example

function fetchData(callback) {
    console.log("Fetching data...");

    setTimeout(() => {
        const data = { user: "Rajvir", age: 22 };
        callback(data); // calling callback
    }, 2000);
}

function showData(result) {
    console.log("Data received:", result);
}

fetchData(showData);
