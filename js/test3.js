// Expected Result : [false, true]
// Direction :
// The first value : If all of arr2 has bigger value than the biggest value of arr1;
// The second value : If some of arr2 has smaller value than the smallest value of arr1;
const arr1 = [4, 6, 2, 3, 5];
const arr2 = [1, 3, 4, 7, 9, 10];

function result(arr1, arr2) {
  // Your Code Here
  const res = [];
  let countArr2 = 0;
  let maxValue1 = Math.max(...arr1);
  let minValue1 = Math.min(...arr1);
  let minValue2 = Math.min(...arr2);
  for (let i = 0; i < arr2.length; i++) {
    countArr2 += arr2[i];
  }
  if (countArr2 > maxValue1) {
    res.push(false);
  } else {
    res.push(true);
  }
  if (minValue2 < minValue1) {
    res.push(true);
  } else {
    res.push(false);
  }
  return res;
}

console.log(result(arr1, arr2));
