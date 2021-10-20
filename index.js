const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What languages do you know?',
      name: 'languages',
    },
    {
      type: 'input',
      message: 'What is your preferred method of communication?',
      name: 'method',
    },
  ])
  .then((response) =>
  {
    fs.writeFile('log.txt', JSON.stringify(response), (err) =>
       err ? console.error(err) : console.log('Success!')
    )
  }


  );

  //`What is your user name?: ${response.username}\nWhat languages do you know: ${response.languages}\nWhat is your preferred method of communication? ${response.method}\n`