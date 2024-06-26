#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// Displaying a colourfull message
console.log(chalk.bold.bgGreen (" \t Welcome To Mehdia Fatima Faizi's - Word Counter"));
console.log("-".repeat(65));

let answer = await inquirer.prompt([
    {
        name:"Sentence",
        type:"input",
        message:"Enter a sentence"
    }
]);

let words = answer.Sentence.trim().split(" ");

console.log("-" .repeat(65));
console.log(chalk.bold("- Sentence Words :" ));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.red(words.length)}`));
console.log("-" .repeat(65));




