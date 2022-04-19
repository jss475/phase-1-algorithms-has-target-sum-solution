function hasTargetSum(array, target) {
  const seenNumbers = new Set(); // initialize an empty Set
  for (const number of array) {
    const complement = target - number;

    // .has returns true if the Set includes the complement
    if (seenNumbers.has(complement)) return true;

    // .add adds the number to the Set
    seenNumbers.add(number);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  0(n)
*/

/* 
  Add your pseudocode here

  Iterate through the array
  For each number in the array, create its complement for the difference between target and number in array
  If complement has been seen/iterated through before, return true
  If complement hasn't been seen, put the current number into seen numbers array
  If not after iterating through all numbers, return false  

*/

/*
  Add written explanation of your solution here
  We iterate through the array and at each number in the array. We figure out
  what number is needed to complement it to successfully subtract the target
  from the number we're looking at. If this is found, return true. If not, return false


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
