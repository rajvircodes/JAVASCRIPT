// PROMISES – Basic Example

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;

            if (success) {
                resolve("Promise Resolved: Data loaded successfully");
            } else {
                reject("Promise Rejected: Something went wrong");
            }
        }, 2000);
    });
}

getData()
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err));
