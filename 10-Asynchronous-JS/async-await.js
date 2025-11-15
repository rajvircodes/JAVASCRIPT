// ASYNC / AWAIT – Cleaner way to handle promises

function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: "Rajvir", role: "Frontend Developer" });
        }, 2000);
    });
}

async function showUser() {
    console.log("Loading user...");
    const user = await fetchUser();
    console.log("User loaded:", user);
}

showUser();
