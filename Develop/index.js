const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

const questions = [
    {
        name: 'title',
        message: 'Please type your project title'
    },
    {
        name: 'description',
        message: 'Please provide a description of your project'
    },
    {
        name: 'installation',
        message: 'Please provide installation instructions'
    },
    {
        name: 'usage',
        message: 'Please provide usage information'
    },
    {
        name: 'contributing',
        message: 'Please provide contribution guidelines'
    },
    {
        name: 'tests',
        message: 'Please provide test instructions'
    },
    {
        name: 'github',
        message: 'Please enter your GitHub username'
    },
    {
        name: 'email',
        message: 'Please enter your email address'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license',
        choices: ['MIT', 'ISC', 'IBM', 'GNU GPL v3', 'No License'],
        default: ['No License']
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }

        console.log('README generated successfully!');
    });
}

function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', markdown);
    })
    .catch((err) => {
        console.log(err);
    });
}

init();
