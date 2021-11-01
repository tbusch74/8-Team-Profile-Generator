function generateRoleSpecificInfo (teamMember) {
    if (teamMember.getRole() === 'Engineer'){
        return `Employee Github Page: <a href="https://github.com/${teamMember.github}">https://github.com/${teamMember.github}</a>`
    }else if (teamMember.getRole() === 'Manager') {
        return `Employee Office Phone Number: ${teamMember.officeNumber}`
    }else if (teamMember.getRole() === 'Intern') {
        return `Intern School: ${teamMember.school}`
    }
};

function generateJobCards(teamMemberArray) {
    concatString = ''
    teamMemberArray.forEach(teamMember => {
        currentString = `
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${teamMember.name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${teamMember.getRole()}</h6>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Employee ID: ${teamMember.id}</li>
                                <li class="list-group-item">Employee Email: <a href="${teamMember.email}">${teamMember.email}</li>
                                <li class="list-group-item">${generateRoleSpecificInfo(teamMember)}</li>
                            </ul>
                        </div>
                        </div>
        `
        concatString = concatString + currentString
    });
    return concatString
}

module.exports = function generateHTML(teamMemberArray) {
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css" />
    <title>My Team</title>
</head>
<body>
    <header>
        <nav class="navbar">
            <div class="container-fluid">
              <span class="navbar-text">
                My Team
              </span>
            </div>
          </nav>
    </header>
    <main>
        <div class="container">
            <div class="row">
                ${generateJobCards(teamMemberArray)}
            </div>
        </div>
    </main>
`
}
