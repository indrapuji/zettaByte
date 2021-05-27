// Expected result : [7, 3, 1, 2, 5, 6, 9, 10, 4, 8]
// Direction : Mutate arr1 to return combined array with arr2. The conditions are :
// 1. odd number at beginning
// 2. even number at the end of array
// 3. Original arr1 at the middle

const arr1 = [1, 2, 5, 6, 9, 10];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(arr1, arr2) {
  // Your Code Here
  let res = [];
  let odd = [];
  let even = [];
  const checkArr = arr2.filter((item) => !arr1.includes(item));
  for (let i = 0; i < checkArr.length; i++) {
    if (checkArr[i] % 2 === 0) {
      even.push(checkArr[i]);
    } else {
      odd.unshift(checkArr[i]);
    }
  }
  return (res = [...odd, ...arr1, ...even]);
}

console.log(result(arr1, arr2));
