const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
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
      type: 'list',
      message: 'which license?',
      name: 'license',
      choices: ['MIT', 'Apache', 'GPLv2', 'GPLv3']
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
      message: 'Give your email, for questions to be directed to.',
      name: 'email',
    },
    {
      type: 'input',
      message: 'Give your github for questions to be directed to.',
      name: 'github',
    },
  
];


function writeToFile(fileName, data) 
{

  fs.writeFile(fileName, generateMarkdown(data), (err) =>
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
