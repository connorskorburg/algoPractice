// Calculate function the returns the sum of all numbers from 1 up to and including n
function addUpTo(n){
  let sum = 0;
  for(let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
/* has n counting operations
    -- n additions (sum+, i++)
    -- n assignments (sum+=, i=n)
    -- 5n + 2
*/
console.log(addUpTo(6));

// gets the same result
function addUpToAgain(n) {
  return n * (n + 1) / 2;
}
/* has 3 counting operations
    -- multiplication
    -- addition
    -- division
*/
console.log(addUpToAgain(6));

