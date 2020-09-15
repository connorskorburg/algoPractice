// Calculate function the returns the sum of all numbers from 1 up to and including n
function addUpTo(n){
  let sum = 0;
  for(let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
let t1 = performance.now()
console.log(addUpTo(6));
let t2 = performance.now()
console.log(`Time elapsed: ${ (t2- t1) / 1000 }`)
// gets the same result
function addUpToAgain(n) {
  return n * (n + 1) / 2;
}
let t3 = performance.now()
console.log(addUpToAgain(6));
let t4 = performance.now()
console.log(`Time elapsed: ${ (t4- t3) / 1000 }`)

/*
-- The Problem with Time
- All machines will record different times of how long an algo takes to finish
- For fast algos, speed measurments may not be precise enough
*/