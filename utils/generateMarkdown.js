// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license)
  if (license === 'MIT') {
    return `![mit](https://img.shields.io/badge/license-MIT-brightgreen)`
  } else if (license === 'Apache 2.0') {
    return `![apache](https://img.shields.io/badge/license-APACHE%202.0-orange)`
  } else if (license === 'GNU GPLv3') {
    return `![gpl](https://img.shields.io/badge/license-GPL%203.0-green)`
  } else if (license === 'BSD 3') {
    return `![bsd](https://img.shields.io/badge/license-BSD%203-blue)`
  } else if (license === 'None') {
    return ``
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `[MIT license](https://opensource.org/licenses/MIT)`
  } else if (license === 'Apache 2.0') {
    return `[Apache 2.0 license](http://www.apache.org/licenses/LICENSE-2.0)`
  } else if (license === 'GNU GPLv3') {
    return `[GNU GPLv3 license](https://www.gnu.org/licenses/gpl-3.0.en.html)`
  } else if (license === 'BSD 3') {
    return `[BSD 3 license](https://opensource.org/licenses/BSD-3-Clause)`
  } else if (license === 'None') {
    return ``
  };
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return ` A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code. `
  } else if (license === 'Apache 2.0') {
    return ` A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  } else if (license === 'GNU GPLv3') {
    return ` Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. `
  } else if (license === 'BSD 3') {
    return `A permissive license similar to the BSD 2-Clause License, but with a 3rd clause that prohibits others from using the name of the copyright holder or its contributors to promote derived products without written consent. `
  } else if (license === 'None') {
    return ``
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  Provide a short description explaining the what, why, and how of your project. 

  ${data.description}

  ## Table of Contents 

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [License](#license)
  
  ## Installation
  What commands are required to run your to install dependencies? 
  
  ${data.dependencies}
  
  ## Tests
  What commands are required to run tests? 

  ${data.test}
  
  ## Usage
  What does the user need to know about using this repository? Provide instructions and examples for use. 
   
  ${data.usage}

  ## Credits
  List your collaborators with links to their GitHub profiles, any third-party assets that require attribution, list the creators with links to their primary web presence in this section, and if you used tutorials, include links to those here as well.

  ${data.credits}

  ## Contributions
  What does the user nee to know about contributing to the repository?

  ${data.contributors}

  ## License

  This project is licensed under ${renderLicenseLink(data.license)}.

  ${renderLicenseSection(data.license)}


  ## Questions

  If you have any questions or concerns, contact the project creator at ${data.email}.
  GitHub profile page is [${data.github}](https://github.com/tlillysib).
`;
}

module.exports = generateMarkdown;
