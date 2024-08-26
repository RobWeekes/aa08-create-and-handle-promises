function stretch() {
    return new Promise((resolve, rej) => {
      // if(rej) return console.error(rej);
      setTimeout(() => {
            // console.log('Start stretch promise');
            console.log('done stretching');
            resolve();
            // resolve(console.log('done stretching'));
        }, 1000)
    })
}

function successCallback(result) {
    // console.log(`Promise is fulfilled: ${result}`);
    console.log(result);
}

function failureCallback(error) {
    console.error(`Promise returned an error: ${error}`);
}

// const promise = stretch();
// const promise2 = promise.then(successCallback, failureCallback);
// // 'done stretching'

function runOnTreadmill() {
    return new Promise(resolve => {
        setTimeout(() => {
            // console.log('Start treadmill promise');
            console.log('done running on treadmill');
            resolve();
        }, 500)
    })
}

// const promise3 = runOnTreadmill();
// const promise4 = promise3.then(successCallback, failureCallback);
// // 'done running on treadmill'

function liftWeights() {
    return new Promise(resolve => {
        setTimeout(() => {
            // console.log('Start liftweights promise');
            console.log('done lifting weights');
            resolve();
        }, 2000)
    })
}

// const promise5 = liftWeights();
// const promise6 = promise5.then(successCallback, failureCallback);
// // 'done lifting weights'

// USING .THEN()
// function workout() {
//     console.log('-- GO TO GYM --');
//     stretch()
//         .then(runOnTreadmill)
//         .then(liftWeights)
//         .then(() => console.log('Done working out'))
// }

// USING ASYNC / AWAIT
async function workout() {
    console.log('-- GO TO GYM --');
    await stretch();
    await runOnTreadmill();
    await liftWeights();
    console.log('done working out');
}

workout();



// NOT WORKING --
// function workout() {
//     // Begin running on the treadmill after you've finished stretching
//     const warmup = promise2.then(promise4);
//     // console.log(warmup);
//     // return warmup;
//     // Begin lifting weights after running on the treadmill
//     const startLifting = warmup.then(promise4);
//     // console.log(startLifting);
//     // resolve('done working out')
// }




/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


// workout();
  // should print out the following:
    // done stretching
    // done running on treadmill
    // done lifting weights
    // done working out
