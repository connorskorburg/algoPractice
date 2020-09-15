function logAtLeast5(n) {
  for (let i = 1; i < Math.max(5, n); i++) {
    console.log(i);
  }
} 
// big O = O(n)


function logAtMost5(n) {
  for (let i = i; i < Math.min(5, n); i++) {
    console.log(i);
  }
}
//big O = O(1)
