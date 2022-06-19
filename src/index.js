// TODO: Include packages needed for this application
const generateMarkdown = require('./generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const licenses = [
  {
    name: 'MIT License',
    id: 'mit'
  },
  {
    name: 'Apache License 2.0',
    id : 'apache-2.0'
  },
  {
    name : 'GNU General Public License v3.0',
    id: 'gpl-3.0'
  }
]
const questions = [
  {
    type: 'input',
    name: 'title',
    message: "please provide a project title",
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please describe your project?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'please provide project installation instructions (lines separated by "\\\\n")',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide a map for user',
  },
  {
    type: 'rawlist',
    name: 'license',
    message: 'please select a license option:',
    choices: licenses
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'please provide contribution guidelines',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'please provide test instructions',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Please enter your GitHub username',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address',
  },
]
const readmeQuestions = () => {
return inquirer.prompt(questions)
  };

// TODO: Create a function to write README file
const writeToFile = async(fileName, data) => {
  const markdown = await generateMarkdown(licenses, data);
  fs.writeFile(fileName, markdown, err => {
    if (err) {
      console.error(err);
    }
  });
}
// TODO: Create a function to initialize app
const init = async () => {
  const data = await readmeQuestions();
  await writeToFile('output\README.md', data);
}

// Function call to initialize app
init();