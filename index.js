#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Hello Sir!");
let ans = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Please enter a sentence to determine the number of words:",
    },
]);
let wordsCount = ans.sentence.trim().split(" ");
console.log(`You have entered ${wordsCount.length} words.`);
console.log(`The words you entered are: ${wordsCount.join(", ")}`);
