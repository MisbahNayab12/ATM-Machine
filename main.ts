#! /usr/bin/env node
 
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
          type: "list",
          name: "amount",
          message: "Please select options",
          choices: ["2000", "4000", "6000", "8000", "10000", "other"]
        }
      ]
    );

    if (amountAns.amount == "other"){
      let enterAmount = await inquirer.prompt(
        [
          {
            name: "newAmount",
            type: "number",
            message: "Please enter amount",
          }
        ]
      )
      if (enterAmount.newAmount < myBalance){
        console.log(`Your remaining balance is ${myBalance - enterAmount.newAmount}`)
      } 
      else {
        console.log("You have insufficient balance.")
      }
    } 
    else if (amountAns.amount == "2000"){
      console.log(`Your remaining balance is ${myBalance - amountAns.amount}`)
    }
    else if (amountAns.amount == "4000"){
      console.log(`Your remaining balance is ${myBalance - amountAns.amount}`)
    }
    else if (amountAns.amount == "6000"){
      console.log(`Your remaining balance is ${myBalance - amountAns.amount}`)
    }
    else if (amountAns.amount == "8000"){
      console.log(`Your remaining balance is ${myBalance - amountAns.amount}`)
    }
    else {
      console.log(`Your remaining balance is ${myBalance - amountAns.amount}`)
    }
  }
  else {
    console.log(`Your current balance is ${myBalance}`)
  }
 }
 else {
  console.log("Incorrect Pin Code. Try again!")
 }