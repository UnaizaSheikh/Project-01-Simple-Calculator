#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNmber" },
    { message: "Enter second nmber", type: "nmber", name: "secondNumber" },
    {
        message: "Select one of the operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Substraction", "Multiplication", "Division"],
    },
]);
// conditional statement
if (answer.operator === "Addition") {
    console.log(answer.firstNmber + answer.secondNumber);
}
else if (answer.operator === "Substraction") {
    console.log(answer.firstNmber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNmber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNmber / answer.secondNumber);
}
else {
    console.log("Please select valid operator");
}
