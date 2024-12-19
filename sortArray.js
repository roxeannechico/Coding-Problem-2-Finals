const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];
let names = [];
let inputNumbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
let inputNames = ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];

let numberIndex = 0;
let nameIndex = 0;


function askForNumber() {
    if (numberIndex < inputNumbers.length) {
        rl.question(`Enter number ${numberIndex + 1} (default ${inputNumbers[numberIndex]}): `, (input) => {
            numbers.push(input ? parseInt(input) : inputNumbers[numberIndex]);
            numberIndex++;
            askForNumber();
        });
    } else {
        askForName();
    }
}


function askForName() {
    if (nameIndex < inputNames.length) {
        rl.question(`Enter name ${nameIndex + 1} (default ${inputNames[nameIndex]}): `, (input) => {
            names.push(input || inputNames[nameIndex]);
            nameIndex++;
            askForName();
        });
    } else {
        processResults();
    }
}


function processResults() {

    let mergedArray = numbers.concat(names);
    console.log("Merged Array: ", mergedArray.join(", "));

    numbers.sort((a, b) => b - a);
    console.log("Numbers sorted in reverse: ", numbers.join(", "));

    // Sort names alphabetically
    names.sort();
    console.log("Names sorted alphabetically: ", names.join(", "));

    rl.close();
}

askForNumber();