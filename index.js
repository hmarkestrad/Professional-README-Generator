//Dependencies and variables
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateReadme")
const writeFileAsync = util.promisify(fs.writeFile);

//User questions to populate the README.md
function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the Github project title (exactly as it appears in github)?",
        },
        {
            type: "input",
            name: "fullname",
            message: "What is the authors full name?",
        },
        {
            type: "input",
            name: "description",
            message: "Description of your project: "
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process if any: ",
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project usage for?"
        },
        {
            type: "list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: 'checkbox',
            message: 'Select technologies used for the project',
            name: 'technologies',
            choices: 
            [
                {
                name: 'json',
                },
                {
                name: 'screencastify',
                },
                {
                name: 'inquirer',
                },
                {
                name: 'node.js',
                },
                {
                name: 'jQuery',
                },
                {
                name: 'Javascript',
                },
                {
                name: 'css',
                },
                {
                name: 'html5',
                }
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Who are the contributors of this project?"
        },
        {
            type: "input",
            name: "tests",
            message: "Is there a test included?"
        },
        {
            type: "input",
            name: "questions",
            message: "What do I do if I have an issue? "
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email: "
        }
    ]);
} 

// Async function using util.promisify 
  async function init() {
    try {
        // Ask user questions and generate responses
        const answers = await promptUser();
        const generateContent = generateReadme(answers);
        // Write new README.md to dist directory
        await writeFileAsync('./dist/README.md', generateContent);
        console.log('Successfully created README.md');
    }   catch(err) {
        console.log(err);
    }
  }
  
  init();  