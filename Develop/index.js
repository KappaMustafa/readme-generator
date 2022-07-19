// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'name',
    message: 'whats the name of the md file you want to create?'

    },
    {
        type: 'input',
        name: 'description',
        message: 'describe your program?'
    
    },
    {
        type: 'input',
        name: 'installation',
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
    {
        type: 'list',
        name: 'license',
        message: 'select a license thing',
        Choices: [

        ]
    },
];
// TODO: Create a function to write README file
function writeToFile(answers) {
    fs.writeFile('readme.md', 
    `
    ${name}
    ${description}
    ${installation}
    ${usage}
    ${guidelines}
    ${testing}
    ${license}
    `)
}

// TODO: Create a function to initialize app
function init() {inquirer.prompt(questions).then((answers) => {
    console.log(answers);
}
)}

// Function call to initialize app
init();
