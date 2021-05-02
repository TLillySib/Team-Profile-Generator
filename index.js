const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./src/generateHTML");
let teamMembers = [];

createManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the manager's name",
      },
      {
        type: "input",
        name: "id",
        message: "What is the manager's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the team manager's email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
      },
    ])
    .then(({ name, id, email, officeNumber }) => {
      const manager = new Manager(name, id, email, officeNumber);
      teamMembers.push(manager);
      console.log(manager);
      menu();
    });
};

createEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the engineer's Name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the engineer's ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the engineer's email:",
      },
      {
        type: "input",
        name: "gitHub",
        message: "Enter the engineer's Github username:",
      },
    ])
    .then(({ name, id, email, gitHub }) => {
      const engineer = new Engineer(name, id, email, gitHub);
      teamMembers.push(engineer);
      console.log(engineer);
      menu();
    });
};

createIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the intern's Name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the intern's ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the intern's Email:",
      },
      {
        type: "input",
        name: "school",
        message: "Enter the school the intern attends:",
      },
    ])
    .then(({ name, id, email, school }) => {
      const intern = new Intern(name, id, email, school);
      teamMembers.push(intern);
      console.log(intern);
      menu();
    });
};

menu = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "members",
        message: "Do you want to add other members to your team?",
        choices: ["Add an Engineer", "Add an Intern", "No New Members"],
      },
    ])
    .then(({ members }) => {
      if (members === "Add an Engineer") {
        createEngineer();
      } else if (members === "Add an Intern") {
        createIntern();
      } else { renderTeam() }
    });
};

function writeFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err
      ? console.log(err)
      : console.log("You successfully created a Team HTML!")
  );
}

function renderTeam() {
  writeFile("./output/myTeam.html", generateHTML(teamMembers))
};

createManager();
