// Generate the README.md
function generateReadme(answers) {
    return `
<h1 align="center">${answers.projectTitle}</h1>

<p align="center">
<img src="https://img.shields.io/github/repo-size/${answers.username}/${answers.projectTitle}" />
<img src="https://img.shields.io/github/languages/top/${answers.username}/${answers.projectTitle}"  />
<img src="https://img.shields.io/github/issues/${answers.username}/${answers.projectTitle}" />
<img src="https://img.shields.io/github/last-commit/${answers.username}/${answers.projectTitle}" >
</p>
  
## Description
${answers.description}

## Table of Contents
- [Description](#description)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Questions](#questions)
  
## Usage
${answers.usage}
  
## Credits & Contributions
${answers.contributing}
  
## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br>
This application is covered by the ${answers.license} license. 
  
## Technologies
![badge](https://img.shields.io/badge/Javascript-blue)
![badge](https://img.shields.io/badge/jQuery-blue)
![badge](https://img.shields.io/badge/-node.js-blue)
![badge](https://img.shields.io/badge/-inquirer-blue)</br>
![badge](https://img.shields.io/badge/-screencastify-blue)
![badge](https://img.shields.io/badge/-json-blue)
![badge](https://img.shields.io/badge/-html5-blue)
![badge](https://img.shields.io/badge/-css-blue)
  
## Installation
${answers.installation}<br>
${answers.tests}

## Questions
GitHub: [${answers.username}](https://github.com/${answers.username})<br>
${answers.questions}<br>
Copyright 2022 © ${answers.fullname}. AllRights Reserved.<br>
This README was generated by [Professional README.md Generator](https://github.com/hmarkestrad/Professional-README-Generator)<br>`; 
}

module.exports = generateReadme;