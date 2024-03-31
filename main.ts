// #! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000; //Dollar
let myPinCode = 1122;
 //print welcome message 
 console.log("Welcome to Shabbir Ali - ATM Machine");

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your Pin Code",
    type: "number",
  },
]);

if (pinAnswer.pin === myPinCode) {
  console.log("Pin is Correct, Login Successfully!");
 
  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "please select option",
      type: "list",
      choices: ["withdraw Ammount", "check balance"],
    },
  ]);

  
  if (operationAns.operation === "withdraw Ammount") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter the amount to withdraw:",
        type: "number",
      },
    ]);
    if(amountAns.amount > myBalance){
      console.log("Insufficient Balance");
    }
    else{
      myBalance -= amountAns.amount;
      console.log(`${amountAns.amount} Withdraw Successfully`);
      console.log(`Your Remaining Balane is: ${myBalance}`)
    }

    
  } else if (operationAns.operation === "check balance") {
    console.log(`your Account Balance is:  ${myBalance}`);
  }

} else {
  console.log("Incorrect Pin number");
}










