// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
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
        type: 'input',
        name: 'GitHub',
        message: 'what is your GitHub?'
    
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is your email address?'
    
    },
];
// TODO: Create a function to write README file

function writeToFile(answers) {
    let template = generateMarkdown(answers);
    console.log(answers);
    let {title, description, installation, usage, guidelines, license, testing, GitHub, email} = answers;
    fs.writeFile('README.md', template
    , (err) => {
        if(err)
            console.log(err);
        else {
            console.log('YAY')
        }
})}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {writeToFile(answers);})
}

// Function call to initialize app
init();
