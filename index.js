const generatehtml = require ('./src/generatehtml');
const fs = require('fs');
const inquirer = require('inquirer')

//profiles
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');

const team = [];

//prompts

const Employee = () =>{
    console.log (`
    ================
    Adding Employees To tTeam
    ================
    `);
    return inquirer.prompt ([
        type:'list',
        name:'role',
        message:"Which type of employee do you want to add?"
        choices: ['Manager', 'Engineer', 'Intern']
    },
    {
        type:'input',
        name:'name',
        message:"What is the employee name?",
        validate: nameInput => {
            if (nameInput){
                return true;
            
            } else {
                console.log("Please enter an employee's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter the employee's ID.",
        validate: nameInput => {
            if (isNaN(nameInput)) {
                console.log ("Please enter the employee's ID!")
                return false;

            } else {
                return true;
            }
        }
    },
    {
            type: 'input',
            name: 'email',
    }
    ])
}