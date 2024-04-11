#! /usr/env node
import inquirer from "inquirer";

const asnwer = await inquirer.prompt([
  { message: "Enter first nubmer", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "Please select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
     //conditional statment
     if(asnwer.operator === "Addition"){
        console.log(asnwer.firstNumber + asnwer.secondNumber);
    }
     else if (asnwer.operator === "Subtraction"){
        console.log(asnwer.firstNumber - asnwer.secondNumber);
    }
     else if (asnwer.operator === "Multiplication"){
        console.log(asnwer.firstNumber * asnwer.secondNumber);
    }
     else if (asnwer.operator === "Division"){
        console.log(asnwer.firstNumber / asnwer.secondNumber);
     }else{
        console.log("Pleade select a valid operator")
     }