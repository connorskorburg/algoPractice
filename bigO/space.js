function sum(arr) {
  let total = 0;
  for (let i= 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total
}
console.log(sum([1,2,3,4,5]));
// O(1) space

function double(arr){
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}
console.log(double([1,2,3]));
// space = O(n)