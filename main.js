#! /usr/bin/env node 
// This line is called a shabang, it tells the OS to run it with Node js
//import the 'inquirer'module whhich is a command line interface for Node .js
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word: ",
    }
]);
const words = answers.Sentence.trim().split(" ");
// print array of words to the console 
console.log(words);
// print the word count of the sentence to consolog
console.log(`Your sentence word count is ${words.length}`);
