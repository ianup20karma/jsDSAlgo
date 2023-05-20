// Write a program to count the number of times a substring occurs in a string.

function naiveStringSearch(long, short) {
    const longStrLength = long.length;
    const shortStrLength = short.length;

    if (longStrLength < shortStrLength) return 0;
    else if (longStrLength === shortStrLength) return 1;
    else {
        let count = 0;
        let i = 0;
        console.log(long.slice(0, longStrLength - shortStrLength));
        while(i < longStrLength - shortStrLength) {
            let currentStr = '';
            for (let j = 0; j < shortStrLength; j++) {
                currentStr += long[i + j];
            }
    
            if (currentStr === short) {
                count += 1;
                i += shortStrLength;
            } else {
                i++;
            }
        }
        return count;
    }
}

const result = naiveStringSearch('lorie loled', 'lo');
console.log(result);