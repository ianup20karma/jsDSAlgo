// HASH FUNCTION - A hash function is any function that can be used to map data of arbitrary size to fixed-size values.
// The values returned by a hash function are called hash values, hash codes, digests, or simply hashes.
// Read More : https://www.geeksforgeeks.org/hash-functions-and-list-types-of-hash-functions/

// Features of Good Hash :
// - Fast (Constant Time)
// - Doesn't cluster outpus at specific indices, but distributes uniformaly
// - Deterministic (Same input yields same output)

// Hash Function make use of Prime numbers. This makes the collision much smaller internally.
// charCodeAt() provides character code. since character code of 'a' is 97, we get 1 from 'a'.charCodeAt(0) - 96

// Strategies for dealing with Collisions :
// There are many but we will focus on two -
// - Separate Chaining (https://www.geeksforgeeks.org/separate-chaining-collision-handling-technique-in-hashing/)
// - Linear Probing (https://www.geeksforgeeks.org/open-addressing-collision-handling-technique-in-hashing/)

function hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}

console.log(hash("hello", 13));
console.log(hash("goodbye", 13));
console.log(hash("hi", 13));
console.log(hash("cyan", 13));
