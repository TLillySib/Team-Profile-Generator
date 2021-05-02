// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        ype: 'input',
        name: 'description',
        message: 'Please provide a short description explaining the what, why, and how of your project.',
    },
    {
        type: 'input',
        name: 'dependencies',
        message: 'What commands are required to run your to install dependencies?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What commands are required to run tests?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using this repository? Provide instructions and examples for use.',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators.',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'What does the user need to know about contributing to the repository?',
    },
    {
        type: 'list',
        name: 'license',
        message:'Choose a license (if project is open sourced, please choose "none" from the list below).',
        choices: ["GNU GPLv3", "Apache 2.0", "MIT", "BSD 3", "None"],
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address?',
    },
  ]

//.then((data) => {
//     const fileName = `${data.name.toLowerCase().split(' ').join('')}.md`;
// });


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully generated a README file')
    );
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data)=> {
        // console.log(data)
    writeToFile("README.md", generateMarkdown(data))
    })
}

// Function call to initialize app
init();


