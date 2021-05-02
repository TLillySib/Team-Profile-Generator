const Manger = require("../lib/manager");
const Intern = require("../lib/intern");
const Engineer = require("../lib/engineer");
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./generateHTML");
const teamMembers = [];

menu = () => {
    createManager = () => {
        inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "Enter the manager's name",
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's id?",
            //Validation here
        },
        {
            type: "input",
            name: "email",
            message: "What is the team manager's email?",
            //Validation here
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?",
            //Validation here
        }
    ]).then(({name, id, email, officeNumber}) =>{
        const manager = new Manager(name, id, email, officeNumber);
        teamMembers.push(manager);

        nextMember();
    });
    }
    createManager();

    nextMember = () => {
        inquirer.prompt ([
            {
                type: "input",
                name: "teamName",
                message: "Enter the Team's Name",  
            },
            {
                type: "list",
                name: "member",
                message: "Do you want to add other members to your team?",
                choices: [
                        "Add Engineer",
                        "Add Intern",
                        "No New Members"
                ]
            }
        ]).then(({answer}) => {
            if(answer ==="Engineer") {
                createEngineer();
            }else if (answer === "Intern") {
                createIntern();
            } else {
                const teamContent = generateHTML(teamMembers);
                fs.writeFile("./output/myTeam.html", teamContent, (err) =>
                err? console.log(err) : console.log("You successfully created a Team HTML!"))
            };
        });
    }

createEngineer = () => {
    inquirer.prompt ([
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
    ]).then(({name, id, email, gitHub}) => {
        const engineer = new Engineer(name, id, email, gitHub);
        teamMembers.push(engineer); 
        nextMember();
    })
}
    
createIntern = () => {
    inquirer.prompt ([
        {
            type: "input",
            name: "interName",
            message: "Enter the intern's Name:"
        },
        {
            type: "input",
            name: "internId",
            message: "Enter the intern's ID:"
        },
        {
            type: "input",
            name: "internEmail",
            message: "Enter the intern's Email:"
        },
        {
            type: "input",
            name: "internSchool",
            message: "Enter the school the intern attends:"
        }
    ]).then(({name, id, email, school}) => {
        const intern = new Intern(name, id, email, school);
        teamMembers.push(intern);

        nextMember();
    });
}}

menu();
