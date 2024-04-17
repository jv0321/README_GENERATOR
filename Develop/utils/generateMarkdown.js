// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == 'No License' || ''){
    return ''
  }
  return '![GitHub license](https://img.shields.io/badge/License-${license}-yellow.svg)'
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == 'No License' || ''){
    return ''
  }
  return `[Link to License](https://opensource.org/license/${license})`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'No License' || license === '') {
    return '';
  }
  return `## License

This project is licensed under the ${license} license. Click [here](${renderLicenseLink(license)}) for more information.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

${renderLicenseSection(data.license)}`;
}

module.exports = generateMarkdown;
