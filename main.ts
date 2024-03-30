#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000; //Dollar
let myPinCode = 1122;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your Pin Code",
    type: "number",
  },
]);

if (pinAnswer.pin === myPinCode) {
  console.log("Correct Pin Code!");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "please select option",
      type: "list",
      choices: ["withdraw", "check balance"],
    },
  ]);

  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter your amount",
        type: "number",
      },
    ]);
    myBalance -= amountAns.amount;
    console.log("your current balance is: " + myBalance);
  } else if (operationAns.operation === "check balance") {
    console.log("your balance is: " + myBalance);
  }
} else {
  console.log("Incorrect Pin number");
}