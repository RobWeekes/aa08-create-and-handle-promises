const wait = (seconds) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, seconds * 1000)
    })
}

wait(1)
    .then(() => console.log("It's been 1 second"))
    .then(() => wait(1))
    .then(() => console.log("It's been 2 seconds"))
    .then(() => wait(3))
    .then(() => console.log("It's been 3 seconds"));
