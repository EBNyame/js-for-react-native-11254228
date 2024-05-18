//task 1


function processArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            return num * num;
        } else {
            return num * 3;
        }
    });
}

//module.exports = processArray;


//Task 2

function formatArrayStrings(stringArray, numberArray) {
    if (stringArray.length !== numberArray.length) {
        throw new Error("Both arrays must have the same length");
    }
    return stringArray.map((str, index) => {
        const num = numberArray[index];
        if (num % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}
const inputArray = [1, 2, 3, 4, 5];
const processedNumbers = processArray(inputArray);
const stringArray = ["Hello", "World", "JavaScript", "is", "fun"];
const formattedStrings = formatArrayStrings(stringArray, processedNumbers);
console.log(formattedStrings);

module.exports = {
    processArray,
    formatArrayStrings
};