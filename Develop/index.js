// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: `title`,
        message: 'whats the title of the md file you want to create?'
    },
    {
        type: 'input',
        name: `description`,
        message: 'describe your program?'
    
    },
    {
        type: 'input',
        name: `installation`,
        message: 'how to install your program?'
    
    },
    {
        type: 'input',
        name: `usage`,
        message: 'how to use this program?'
    
    },
    {
        type: 'input',
        name: `guidelines`,
        message: 'any contribution limits?'
    
    },
    {
        type: 'input',
        name: `testing`,
        message: 'how to test this program?'
    
    },
    {
        type: 'list',
        name: `license`,
        message: 'select a license thing',
        choices: ['1', '2', '3']
    },
];
// TODO: Create a function to write README file
function writeToFile() {
    const answers = {title, description, installation, usage, guidelines, license, testing}
    fs.writeFile('README.md', 
    `
    ${title}
    ${description}
    ${installation}
    ${usage}
    ${guidelines}
    ${testing}
    ${license}
    `)
    , (err) => {
        if(err)
            console.log(err);
        else {
            console.log('YAY')
        }
}}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {writeToFile(answers);})
}

// Function call to initialize app
init();
