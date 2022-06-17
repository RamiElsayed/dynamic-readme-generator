const axios = require('axios')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![${license.name}](https://img.shields.io/badge/${encodeURIComponent(license.name)}-green)`
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `https://api.github.com/licenses/${encodeURIComponent(license.id)}`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = async(license) => {
  let licenseSection = '## License';
  const response = await axios.get(renderLicenseLink(license));
  const description = response.data.description;
  licenseSection += '\n' + description;
  return licenseSection
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = async(licenses, data) => {
  let markdown = `# ${data.title}`;

  const license = licenses.find(x => x.name == data.license);

  markdown += '\n' + renderLicenseBadge(license);
  markdown += '\n' + `| ## Table of Content |`;
  markdown += '\n' + '- [Description](#description)';
  markdown += '\n' + '- [Installation](#installation)';
  markdown += '\n' + '- [Usage](#usage)';
  markdown += '\n' + '- [Contributing](#contributing)';
  markdown += '\n' + '- [Tests](#tests)';
  markdown += '\n' + '- [Questions](#questions)';
  markdown += '\n' + '## Description';
  markdown += '\n' + `> ${data.description}`;
  markdown += '\n' + '## Installation';
  const installationLines = data.installation.replace('\\n', '\n').split('\n');
  for (let line of installationLines) {
    markdown += '\n' + `${line}`;
  }
  markdown += '\n' + '## Usage';
  markdown += '\n' + `> ${data.usage}`;
  markdown += '\n' + await renderLicenseSection(license);
  markdown += '\n' + '## Contributing';
  markdown += '\n' + `> ${data.contributing}`;
  markdown += '\n' + '## Tests';
  markdown += '\n' + `> ${data.tests}`;
  markdown += '\n' + '## Questions';
  markdown += '\n' + '> If you have any suggestions or questions please check my github: ';
  markdown += '\n' + `> [${data.github}](https://www.github.com/${data.github})`;
  markdown += '\n' + '> For any questions please email me on:  ';
  markdown += '\n' + `> <${data.email}>`;
  return markdown;
}

module.exports = generateMarkdown;
