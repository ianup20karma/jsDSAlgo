// Write a program to count the number of times a substring occurs in a string.

function naiveStringSearch(long, short) {
    const longLen = long.length;
    const shortLen = short.length;
    
    if (longLen < shortLen) return 0;
    else if (longLen === shortLen) return 1;
    else {
        let count = 0;
        let i = 0;
        while(i < longLen - shortLen) {
            let crrString = '';
            for (let j = 0; j < shortLen; j++) crrString += long[i + j];

            if (crrString === short) {
                count += 1;
                i += shortLen;
            }
            i++;
        }
        return count;
    }
}

const result = naiveStringSearch('lorie loled', 'lo');
console.log(result);