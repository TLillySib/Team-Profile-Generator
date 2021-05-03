function cardManager(data) {
    return `<div class="card" style="max-width: 18rem;">
    <div class="employeeCard">
        <div class="card-header">
            <h2>${data.name}</h2>
            <h3 class="card-title"><span class="material-icons">assignment</span>Manager</h3>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>ID:</strong> ${data.id}</li>
                <li class="list-group-item"><strong>Email: </strong> ${data.officeNumber}</li>
                <li class="list-group-item"><strong>Office Number:</strong> 1</li>
            </ul>
        </div>                
    </div>
</div>`   
};


function cardEngineer(data) {
    return `<div class="card" style="max-width: 18rem;">
    <div class="employeeCard">
        <div class="card-header">
            <h2>${data.name}</h2>
            <h3 class="card-title"><span class="material-icons">engineering</span>Engineer</h3>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>ID:</strong> ${data.id}</li>
                <li class="list-group-item"><strong>Email: </strong> ${data.email}</li>
                <li class="list-group-item"><strong>GitHub:</strong> ${data.gitHub}</li>
            </ul>
        </div>                
    </div>
</div>`
};


function cardIntern(data) {
    return `<div class="card" style="max-width: 18rem;">
    <div class="employeeCard">
        <div class="card-header">
            <h2>${data.name}</h2>
            <h3 class="card-title"><span class="material-icons">school</span>Intern</h3>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>ID:</strong> ${data.id}</li>
                <li class="list-group-item"><strong>Email: </strong> ${data.email}</li>
                <li class="list-group-item"><strong>School: </strong> ${data.school}</li>
            </ul>
        </div>                
    </div>
</div>`    
};

function generateHTML(teamMembers) {
    let employeeCard = "";
    teamMembers.forEach(member => {
        if (member.getRole() === "Manager") {
            employeeCard += cardManager(member);
        } else if (member.getRole() === "Engineer") {
            employeeCard += cardEngineer(member);
        } else if (member.getRole() === "Intern") {
            employeeCard += cardIntern(member);
        };
    }) 

     return `<!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
         <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
         <link rel="stylesheet" href="style.css">
         <title>Team Profile</title>
     </head>
     
     <body>
         <header>
             <div class="jumbotron jumbotron-fluid">
                 <div class="container">
                     <h1 class="display-4 justify-content-center">Tiger Team</h1>
                 </div>
             </div>
         </header>

         <section>
            <div class="card-deck" id="roles">

            ${employeeCard}  
            
            
            </div>    
        </section>
            
    </body>
    </html>`
};

module.exports = generateHTML;
