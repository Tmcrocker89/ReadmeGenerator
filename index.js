const inquirer = require('inquirer');
const fs = require('fs');
const questions = [
  {
      type: 'input',
      message: 'What is the title of the project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Give a description.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'How do you install the program?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'How do you use the program?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'which license?',
      name: 'license',
    },
    {
      type: 'input',
      message: 'Who contribuited?',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'Give test instructions.',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'Give your email, and github for questions to be directed to.',
      name: 'questions',
    },
  
];


function writeToFile(fileName, {title, description, installation, usage, license, contribution, tests, questions}) 
{
  let readmeContent = 
`
# ${title}
# Table of Contents
${description}
# Installation
${installation}
# Usage
${usage}
# License
${license}
# Contributing
${contribution}
# Tests
${tests}
# Questions
${questions}
`
  fs.writeFile(fileName, readmeContent, (err) =>
       err ? console.error(err) : console.log('Success!')
    )
}
const init = () =>
{
  inquirer
    .prompt(questions)
    .then((response) =>
    {
      writeToFile('Readme.md', response)
    }


    );
}
init()
