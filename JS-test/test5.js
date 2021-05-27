// Expected Result : 6
// Direction : Get the total of "1" in binary value of number input
const number = 221;

function result(num) {
  // Your Code Here
  let binary = num.toString(2);
  let numString = binary.toString();
  let count = 0;
  for (let i = 0; i < numString.length; i++) {
    if (numString[i] === '1') {
      count++;
    }
  }
  return count;
}

console.log(result(number));
