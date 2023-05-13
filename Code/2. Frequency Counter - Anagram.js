// Given two strings, Write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed by iceman.

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  else if (str1 === '' || str2 === '') return true;
  else {
    const subStrCount = str => str.split('').reduce((acc, crr) => {
      acc[crr] = (acc[crr] || 0) + 1;
      return acc;
    }, {});

    const str1Counts = subStrCount(str1);
    const str2Counts = subStrCount(str2);

    for (const key in str1Counts) {
      if (str1Counts[key] !== str2Counts[key]) return false;
    }

    return true;
  }
}

const result = validAnagram('anagram', 'nagaram');
console.log(result);
