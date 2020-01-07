const goodBrackets = '[]';
const goodBraces = '()';
const goodCurlies = '{}';

function bracesValid(b) {
  // make sure we have an even number of paren
  if (b % 2 == 0) return false
  // Split the items into an array
  let items = b.split('')
  // Test how many items to loop over
  let t = b.length / 2
  for (let i = 0; i < t; i++) {
    // Get the item from the begining
    let first = items[i]
    // Get the item form the other side
    let last = items[items.length - i - 1]
    // Test the two, they should not match to be valid
    // If they do match then return false
    if (first == last) return false
  }
  return true
}

console.log(bracesValid("(((())))"))