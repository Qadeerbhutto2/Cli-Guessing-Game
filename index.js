#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 5 + 1);
console.log(`wellcome to my game`);
const answers = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: "please select guess number 1-5",
    },
]);
if (answers.userGuessednumber === randomNumber) {
    console.log(`well done MR/MS you guessed a right number.`);
}
else {
    console.log(`SORRY MR/MS you guees a wrong number`);
}
