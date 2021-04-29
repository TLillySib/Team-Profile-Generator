const Manger = require("../lib/manager");
const Employee = require("../lib/employee");
const Intern = require("../lib/intern");
const Engineer = require("../lib/engineer");
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("../lib/manager");

const teamNewMembers = [];

//Question Arrays
const managerQuestion = [
    {
        type: "input",
        name: "managerName",
        message: "Enter the manager's name",
    },
    {
        type: "input",
        name: "managerId",
        message: "What is the manager's id?",
        //Validation here
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is the team manager's email?",
        //Validation here
    },
    {
        type: "input",
        name: "managerOffice",
        message: "What is the manager's office number?",
        //Validation here
    }

];
const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter the engineer's Name:"
    },
    {
        type: "input",
        name: "id",
        message: "Enter the engineer's ID:"
    },
    {
        type: "input",
        name: "email",
        message: "Enter the engineer's email:"
    },
    {
        type: "input",
        name: "gitHub",
        message: "Enter the engineer's Github username:"     
    }
];
const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter the intern's Name:"
    },
    {
        type: "input",
        name: "id",
        message: "Enter the intern's ID:"
    },
    {
        type: "input",
        name: "email",
        message: "Enter the intern's Email:"
    },
    {
        type: "input",
        name: "school",
        message: "Enter the school the intern attends:"
    }
];
const addTeamMember = 
    {
        type: "list",
        name: "teamEmployee",
        message: "Do you want to add other members to your team?",
        choices: [
                   "Add Engineer",
                   "Add Intern",
                   "No New Members"
        ]
    }
//Functions for each class
createManager = () => {
    inquirer.prompt(managerQuestion).then(response => {
        const newManager = new Manager(response.name, response.id, response.email, response.officeNumber)
        teamNewMembers.push(newManager)
        createTeam()
     })
}

createEngineer = () =>{
    inquirer.prompt(engineerQuestion).then(response => {
        const newEngineer = new Engineer(response.name, response.id, response.email, response.officeNumber)
        teamNewMembers.push(newEngineer)
        createTeam()
     })
}

createIntern = () => {
    inquirer.prompt(internQuestion).then(response => {
        const newIntern = new Intern(response.name, response.id, response.email, response.officeNumber)
        teamNewMembers.push(newIntern)
        createTeam()
     })
}

//Function to create my team

createTeam = () => {
    inquirer.prompt(addTeamMember).then(response => {
        if(response.team === "Engineer") {
            createEngineer();
        } else if (response.team === "Intern") {
            createIntern();
        } else if (response.team === "No New Memberes") {

            const finalHTML = render(teamNewMembers)
            fs.writeFile("./output/team.html", finalHTML, function (err) {
                if (err) {
                    return console.log(err); 
                      
            }
            console.log("You successfully created a Team HTML!")
            
            });
        }
    })
};

createManager();

