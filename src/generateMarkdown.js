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
  markdown += '\n' + await renderLicenseSection(license);
  markdown += '\n' + '## Table of Content';
  markdown += '\n' + '|-Description|';
  markdown += '\n' + '|-Installation';
  markdown += '\n' + '|-usage';
  return markdown;
}

module.exports = generateMarkdown;
