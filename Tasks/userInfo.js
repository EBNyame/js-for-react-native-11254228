//task 3

function createUserProfiles(originalNames, modifiedNames) {
    if (originalNames.length !== modifiedNames.length) {
        throw new Error("Both arrays must have the same length");
    }

    return originalNames.map((name, index) => ({
        originalName: name,
        modifiedName: modifiedNames[index],
        id: index + 1
    }));
}

const originalNames = ["Alice", "Bob", "Charlie", "Dana", "Eve"];
const modifiedNames = ["ALICE", "bob", "CHARLIE", "dana", "EVE"];
const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);

module.exports = createUserProfiles;