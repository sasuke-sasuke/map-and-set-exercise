// Write a function called hasDuplicate which accepts an array and returns true or 
// false if that array contains a duplicate

const hasDuplicates = (arr) => new Set(arr).size !== arr.length;

// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers
//  and the values are the count of the vowels in the string.

const vowelCount = (str) => {
    const filtered = Array.from(str).filter((char) => 'aeiou'.indexOf(char.toLowerCase()) !== -1);
    const map = new Map();
    for(let char of filtered){
        const lowercase = char.toLowerCase();
        if(map.has(lowercase)){
            map.set(lowercase, map.get(lowercase) + 1);
        } else {
            map.set(lowercase, 1);
        }
    }
    return map;
}