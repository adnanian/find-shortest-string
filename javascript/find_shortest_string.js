function findShortestString(arr) {
  let shortest_string = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const length = Math.min(shortest_string.length, arr[i].length);
    if (length === arr[i].length && length !== shortest_string.length) {
      shortest_string = arr[i];
    }
  }
  return shortest_string;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
  const small_input = ['asdf','sd','d'];
  const large_input = [];
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 100; i++) {
    const random_string_length = Number.parseInt(Math.random() * 40);
    let string = "";
    for (let j = 0; j < random_string_length; j++) {
      string += chars.charAt(Math.floor(Math.random() * chars));
    }
    large_input.push(string);
  }
  const start = performance.now();
  for (let i = 0; i < 1000; i++) {
    findShortestString(small_input);
    findShortestString(large_input);
  }
  const end = performance.now();
  const runTime = (end - start) / 2000;
  console.log("Run time: ", runTime);
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
