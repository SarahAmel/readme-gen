
// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fileName = "README.md"


const questions = [
    {
      type: 'input',
      name: 'github',
      message: 'What is your github name?',
    },

    {
      type: 'input',
      name: 'location',
      message: 'What is your email adress?',
    },

    {
      type: 'input',
      name: 'project desciption',
      message: 'Tell me about the project?',
    },

    {
      type: 'input',
      name: 'project examples ',
      message: 'Does your project have any visual examples',
    },

    {
      type: 'input',
      name: 'license',
      message: 'What license does your project have?',
    },

    {
      type: 'input',
      name: 'comand',
      message: 'What command should I run to install dependencies?',
    },


    {
        type: 'input',
        name: 'test',
        message: 'What command should be run for tests?',
      },


      {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to the repo?',
      },


      {
        type: 'input',
        name: 'important',
        message: 'What does your user need to know about using the repository?',
      },
  ]

  
const init = () => {

inquirer.prompt(questions)
.then((data) =>  fs.writeFile ("READ.md", generateMarkdown, (data)))

.then((data)=> console.log("Good job kid!"))

.catch((err) => console.error(err));

}


init();


  // .then((answers) => {
  //   const htmlPageContent = generateHTML(answers);

    
    
    
    
    
  //   fs.writeFile('index.html', htmlPageContent, (err) =>
  //     err ? console.log(err) : console.log('Successfully created index.html!')
  //   );
  // });




  // function writeToFile(fileName, data) {}

  // function init() {}
  
  
  // init();


  // Function call to initialize app
// Function call to initialize app
// TODO: Create a function to initialize app
// TODO: Create a function to write README file

  // What's your GitHub username?
// What is your email address?
// What is your project title?
// Please write a short project description.
// Do you have a link to a picture or video for the application?
// What kind of license does your project have?
// What command should I run to install dependencies?
// What command should be run for tests?
// What does your user need to know about using the repository?
// Who contributed to the repo?