function stretch(timeLeft) {
    return new Promise((resolve, rej) => {
    if(timeLeft < 1000) rej("Error: you don't have enough time to stretch");
    else {
        setTimeout(() => {
          console.log('done stretching');
          resolve(timeLeft - 1000);
          // resolve(console.log('done stretching'));
        }, 1000)
    }
    })
}

function runOnTreadmill(timeLeft) {
    return new Promise((resolve, rej) => {
    if(timeLeft < 500) rej("Error: you don't have enough time to run on treadmill");
    else {
        setTimeout(() => {
            console.log('done running on treadmill');
            resolve(timeLeft - 500);
        }, 500)
    }
    })
}

function liftWeights(timeLeft) {
    return new Promise((resolve, rej) => {
    if(timeLeft < 2000) rej("Error: you don't have enough time to lift weights");
    else {
        setTimeout(() => {
            console.log('done lifting weights');
            resolve(timeLeft - 2000);
        }, 2000)
    }
    })
}


// THEN() method
// function workout(totalTime) {
//     console.log('-- GO TO GYM --');
//     stretch(totalTime)
//       .then(timeAfterStretching => runOnTreadmill(timeAfterStretching))
//       .then(res => liftWeights(res))
//       .then(timeRemaining => console.log(`Done working out with ${timeRemaining/1000} seconds left.`))
//       .catch(err => console.log(err));
// }

// ASYNC / AWAIT method
async function workout(totalTime) {
    console.log('-- GO TO GYM --');
    try {
        await stretch(totalTime);
        await runOnTreadmill(totalTime - 1000);
        await liftWeights(totalTime - 1500);
        console.log(`Done working out with ${(totalTime-3500)/1000} seconds left.`);
    }
    catch (error) {
        console.log(error);
    }
}

workout(3500);

/* ============================ TEST YOUR CODE ============================

Comment in each invocation of your workout function below and run the file
(node phase-2.js) to see if you get the expected output.
*/


// workout(500);
  // should print out the following:
    // Error:  you dont have enough time to stretch


// workout(1000);
  // should print out the following:
    // done stretching
    // Error:  you dont have enough time to run on treadmill


// workout(2000);
  // should print out the following:
    // done stretching
    // done running on treadmill
    // Error:  you dont have enough time to lift weights


// workout(4000);
  // should print out the following:
  //   done stretching
  //   done running on treadmill
  //   done lifting weights
  //   done working out with 0.5 seconds left
