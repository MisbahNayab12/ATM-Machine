#! usr/bin/env node
 
 import inquirer from "inquirer"
 
 let myBalance = 10000
 let myPin = 2022

 let pinAns = await inquirer.prompt(
  [
    {
      type: "number",
      name: "pin",
      message: "enter your pin code",
    }
 ]
);

 if (pinAns.pin === myPin){
  console.log("Correct Pin Code!!!");

  let operation = await inquirer.prompt(
    [
      {
        type: "list",
        name: "options",
        message: "please select options",
        choices: ["withdraw", "check balance"],
      }
    ]
  );

  if (operation.options === "withdraw"){
    let amountAns = await inquirer.prompt(
      [
        {
          type: "number",
          name: "amount",
          message: "enter your amount",
        }
      ]
    );

    if (amountAns.amount>myBalance){
      console.log("Insufficient Balance")
    } else{
      myBalance -= amountAns.amount;
    console.log(`Your remaining balance is: ${myBalance}`)
    }
  }

  else if (operation.options === "check balance"){
    console.log(`Your current balance is: ${myBalance}`)
  }
 }
 else {
  console.log("Incorrect Pin Code. Try again!")
 }
