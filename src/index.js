// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const readmeQuestions =  
    [
      {
        type: 'input',
        name: 'title',
        message: "please provide a project title",
      },
      {
        type: 'input',
        name: 'location',
        message: 'Where are you from?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please describe your project?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'please provide project installation instructions',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please provide a map for user',
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'please select a license option:',
        choices: ['MIT License','Apache License','GNU General Public License v3.0']
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'please provide contribution guidelines',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'please provide  test instructions',
      },
      {
        type: 'input',
        name: 'Questions',
        message: 'Please enter your GitHub username',
      },
      {
        type: 'input',
        name: 'Questions',
        message: 'Please enter your email address',
      },
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = async () => {
  const projectAnswers = await inquirer.prompt(readmeQuestions);

  console.log(projectAnswers);
}

// Function call to initialize app
init();