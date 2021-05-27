// Expected Result = 55
// Direction : Return sum of array
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(input) {
  // Your Code Here
  let res = 0;
  for (let i = 0; i < input.length; i++) {
    res += input[i];
  }
  return res;
}

console.log(result(input));
