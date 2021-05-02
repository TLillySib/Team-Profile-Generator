function cardManager(data) {
    return `<div class="employeeCard ml-3 border border-primary">
    <div class="card-header">
        <h2 class="card-title">${data.name}</h2>
        <h3 class="card-title"><span class="material-icons">assignment</span>Manager</h3>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush ">
            <li class="list-group-item"><strong>ID:</strong>${data.id}</li>
            <li class="list-group-item"><strong>Email: </strong>${data.email}</li>
            <li class="list-group-item"><strong>Office Number:</strong>${data.officeNumber}</li>
        </ul>
    </div>
</div>`;
}
function cardEngineer(data) {
    return `<div class="employeeCard ml-3 border border-primary ">
    <div class="card-header">
        <h2 class="card-title">${data.name}</h2>
        <h3 class="card-title"><span class="material-icons">engineering</span>Engineer</h3>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><strong>ID:</strong>${data.id}</li>
            <li class="list-group-item"><strong>Email: </strong>${data.email}</li>
            <li class="list-group-item"><strong>GitHub:</strong>${data.gitHub}</li>
        </ul>
    </div>
</div>`
}
function cardIntern(data) {
    return `<div class="employeeCard ml-3 border border-primary ">
    <div class="card-header">
        <h2 class="card-title">Tiger Team Profile</h2>
        <h3 class="card-title"><span class="material-icons">school</span>Intern</h3>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><strong>ID:</strong>${data.id}</li>
            <li class="list-group-item"><strong>Email: </strong>${data.email}</li>
            <li class="list-group-item"><strong>School:</strong>${data.school}</li>
        </ul>
    </div>
</div>`
}

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
         <title>Team Profile</title>
         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
         <link href="./fontawesome-free-5.15.3-web/css/all.css" rel="stylesheet">
         <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
         <link rel="preconnect" href="https://fonts.gstatic.com">
         <link href="https://fonts.googleapis.com/css2?family=Karantina:wght@300&display=swap" rel="stylesheet">
         <link href="./output/style.css" rel="stylesheet">
     </head>
     
     <body>
         <header>
             <h1 class="display-4 justify-content-center">Tiger Team</h1>
         </header>
         <br>

         <section>
             <div id="roles" class="container">
             ${employeeCard}            
             </div>
         </section>
         
         <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
         <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
         
     </body>
     </html>`
}
module.exports = generateHTML;
