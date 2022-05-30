// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None"){
    return `[License]($(license))`
  }

 return "";


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license !== "None"){
  return `/n* [Licence](#) /n`
}


return "";

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {


  if (license !== "None"){
    return `## License

    This project is licensed under $(put the name of the license).`;
  }
  
  
  return "";
  
  

}

// TODO: Create a function to generate markdown for READMEnp
// reutn the whole reame the title who made the project 
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
