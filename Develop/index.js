// TODO: Include packages needed for this application
const fs = resquire('fs')
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'file name',
    message: 'whats the name of the md file you want to create?'

    },
    {
        type: 'input',
        name: 'file description',
        message: 'describe your program?'
    
    },
    {
        type: 'input',
        name: 'how to isntall',
        message: 'howm to install your program?'
    
    },
    {
        type: 'input',
        name: 'usage',
        message: 'how to use this program?'
    
    },
    {
        type: 'input',
        name: 'guidelines',
        message: 'any contribution limits?'
    
    },
    {
        type: 'input',
        name: 'testing',
        message: 'how to test this program?'
    
    },
];

// TODO: Create a function to write README file
function writeToFile(README, answers) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
