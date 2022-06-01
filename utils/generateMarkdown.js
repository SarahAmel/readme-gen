// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None"){
    return `[License]($(license))`
  }
return "";


if (license !== "MIT"){
 
 
  return `[License:MIT] [((https://img.shields.io/badge/license-MIT-green)(https://choosealicense.com/licenses/mit/)`


}

return "";

if (license !== "Apache"){
 
 
  return `[License] (https://img.shields.io/badge/license-Apache-green) (https://opensource.org/licenses/Apache-2.0)`

}

return "";


if (license !== "Affero General Public"){
  return `[License] (https://img.shields.io/badge/license-GNU%20Affero%20General%20Public-green)(https://choosealicense.com/licenses/agpl-3.0/)`
}


return " "


};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
// if (license !== "None"){
//   return `/n* [Licence](#) /n`
// }


// return "";

// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {


//   if (license !== "None"){
//     return `## License

//     This project is licensed under $(put the name of the license).`;
//   }
  
  
//   return "";
  
  

// }

// TODO: Create a function to generate markdown for READMEnp
// reutn the whole reame the title who made the project 
function generateMarkdown(data) {
  return `
  ##Title   
  # ${data.title}
  

 ##Table of contents 
 
 [Description](#Description)

 [Navagaition](#Navigation)

 [Screenshit](#Screenshot)

 [Video](#Video)

 [License](#License)

 [Links](#Links)

 [Refrences](#Refrences)



 ##Description 
  ${data.description}


  ##Navigation
  ${data.Navigation}

 ##Screenshot
 [Project Screenshot](${data.screenshot})


 ## Screenshot
 [Project Screenshot](${data.screenshot})

 #video
 [Video Link](${data.videolink})


 ## License
 ${renderLicenseBadge(data.license)}



 ## Links

[Github Link](${data.github})

[Portfolio Link](${data.portfolio})
  
[Email](${data.email})
  
##Refrences
(${data.refrences})


`;
}





























module.exports = generateMarkdown;


















































































// use as ref for markdown 
// const generateHTML = ({ name, location, github, linkedin }) =>
//   `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
//   <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <h1 class="display-4">Hi! My name is ${name}</h1>
//     <p class="lead">I am from ${location}.</p>
//     <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//     <ul class="list-group">
//       <li class="list-group-item">My GitHub username is ${github}</li>
//       <li class="list-group-item">LinkedIn: ${linkedin}</li>
//     </ul>
//   </div>
// </div>
// </body>
// </html>`