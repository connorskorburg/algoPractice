// write a function called same, which accepts two arrays. the function should return tru if every value in the second array has it's corresponding value squared in the second array, The frequency of values must be the same 

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if(correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex,1);
  }
  return true;

}
//O(n^2)
console.log(same([1,2,3], [1,9,4]));
console.log(same([1,2,3], [1,9]));
console.log(same([1,2,3], [1,9,9]));

//refactor
function sameRefactor(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for(let val of arr1) {
    //counting the frequency of values
      //checks to see if val is already assigned and + 1, if not set to zero and and 1
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    // console.log(val)
    // console.log(frequencyCounter1[val])
  }
  for(let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  console.log(frequencyCounter1)
  console.log(frequencyCounter2)
  for(let key in frequencyCounter1) {

    console.log(frequencyCounter2[key ** 2]);
    console.log(frequencyCounter1[key]);
    if(!(key ** 2 in frequencyCounter2)) {
      return false
    }
    //check to see if the frequencies match for each matching value and sqrt
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
   return true; 
}
//O(n)
console.log(sameRefactor([1,2,3,2], [9,1,4,4]));
// console.log(sameRefactor([1,2,3], [1,9]));
// console.log(sameRefactor([1,2,3], [1,9,9]));