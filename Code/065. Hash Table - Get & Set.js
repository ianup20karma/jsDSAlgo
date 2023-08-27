// HASH TABLE - A Hash table is defined as a data structure used to insert, look up, and remove key-value pairs quickly.
// It operates on the hashing concept, where each key is translated by a hash function into a distinct index in an array.
// The index functions as a storage location for the matching value. In simple words, it maps the keys with the value.
// Read More: https://www.geeksforgeeks.org/hash-table-data-structure/

// TIME COMPLEXITY OF HASH TABLES:
// Insertion: O(1)
// Deletion: O(1)
// Access: O(1)

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
        this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value])
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
        for (let i = 0; i < this.keyMap[index].length; i++) {
            if (this.keyMap[index][i][0] === key) {
                return this.keyMap[index][i][1];
            }
        }
    }
    return undefined;
  }
}

const hashTable = new HashTable();

hashTable.set("maroon","#800000");
// [ <12 empty items>, [ [ 'maroon', '#800000' ] ], <40 empty items> ]
hashTable.set("yellow","#FFFF00");
// [ <3 empty items>, [ [ 'yellow', '#FFFF00' ] ], <8 empty items>, [ [ 'maroon', '#800000' ] ], <40 empty items> ]
hashTable.set("olive","#808000");
// [ <3 empty items>, [ [ 'yellow', '#FFFF00' ] ], <4 empty items>, [ [ 'olive', '#808000' ] ], <3 empty items>, [ [ 'maroon', '#800000' ] ], <40 empty items> ]
hashTable.set("salmon","#FA8072");
// [ <3 empty items>, [ [ 'yellow', '#FFFF00' ] ], <4 empty items>, [ [ 'olive', '#808000' ] ], <3 empty items>, [ [ 'maroon', '#800000' ] ], <6 empty items>, [ [ 'salmon', '#FA8072' ] ], <33 empty items> ]
hashTable.set("lightcoral","#F08080");
// [ <3 empty items>, [ [ 'yellow', '#FFFF00' ] ], <4 empty items>, [ [ 'olive', '#808000' ] ], <3 empty items>, [ [ 'maroon', '#800000' ] ], <6 empty items>, [ [ 'salmon', '#FA8072' ] ], <19 empty items>, [ [ 'lightcoral', '#F08080' ] ], <13 empty items> ]
hashTable.set("mediumvioletred","#C71585");
// [ <3 empty items>, [ [ 'yellow', '#FFFF00' ] ], <4 empty items>, [ [ 'olive', '#808000' ] ], <3 empty items>, [ [ 'maroon', '#800000' ] ], <6 empty items>, [ [ 'salmon', '#FA8072' ] ], <19 empty items>, [ [ 'lightcoral', '#F08080' ] ], <6 empty items>, [ [ 'mediumvioletred', '#C71585' ] ], <6 empty items> ]
hashTable.set("plum","#DDA0DD");
// [ <3 empty items>, [ [ 'yellow', '#FFFF00' ] ], <4 empty items>, [ [ 'olive', '#808000' ] ], <3 empty items>, [ [ 'maroon', '#800000' ] ], <6 empty items>, [ [ 'salmon', '#FA8072' ] ], <13 empty items>, [ [ 'plum', '#DDA0DD' ] ], <5 empty items>, [ [ 'lightcoral', '#F08080' ] ], <6 empty items>, [ [ 'mediumvioletred', '#C71585' ] ], <6 empty items> ]

console.log(hashTable.get("lightcoral")); // #F08080
console.log(hashTable.get("mediumvioletred")); // #C71585
console.log(hashTable.get("plum")); // #DDA0DD
console.log(hashTable.get("randomColor")); // undefined