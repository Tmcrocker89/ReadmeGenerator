// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) 
{
  if(license == 'MIT')
  {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if(license == 'Apache')
  {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else if( license == 'GPLv2')
  {
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  }
  else if(license === 'GPLv3')
  {
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
  }
  else
  {
    return ''
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, installation, usage, license, contribution, tests, email, github}) {
  const licenseBadge = renderLicenseBadge(license)
  return (
  `
  # ${title}
  # Table of Contents
  [Description](#Description)<br>
  [Installation](#Installation)<br>
  [Usage](#Usage)<br>
  [License](#License)<br>
  [Contributing](#Contributing)<br>
  [Tests](#tests)<br>
  [Questions](#Questions)<br>
  # Description
  ${description}
  # Installation
  ### How to install the application
  ${installation}
  # Usage
  ${usage}
  # License
  ${licenseBadge}
  # Contributing
  ${contribution}
  # Tests
  ### How to test the application.
  ${tests}
  # Questions
  ### For questions contact me using the information below.
  ${email} [Github](https://github.com/${github})
`
  );
}

module.exports = generateMarkdown;
