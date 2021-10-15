function selectionSort(arr) {
  return arr.sort((a, b) => a - b)
}

// use sort method to sort the array

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [10, 100, 30, 2000]");
  console.log("=>", selectionSort([10, 30, 100, 2000]));

  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  
    const longInput = [];

    const startTime = new Date()

    for (let i = 0; i < 10000; ++i) {
      longInput.push(Math.random());
      selectionSort(longInput)
    }

    const endTime = new Date()

    console.log(endTime - startTime + 'ms')
    
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution

// Selection sort: we need to sort the array based on value... can I use the sort method? 

// Benchmark: track how long it takes the solution to run based on the amount of time sit ran. 
