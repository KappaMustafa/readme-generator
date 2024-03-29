// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of Contents
  [Description](#description)  
  [Installation](#installation)  
  [Usage](#usage)  
  [Guidelines](#guidelines)  
  [GitHub](#GitHub)
  [Email](#email)

  ## Description! 
  ${data.description}
  ## How to use this?
  ${data.usage}
  ## How to isntall?
  ${data.installation}
  ## Guidelines?
  ${data.guidelines}
  ## How to test this?
  ${data.testing}
  ## What is your Github?
  ${data.GitHub}
  ## What is your Email?
  ${data.email}
  `;
}

module.exports = generateMarkdown;
