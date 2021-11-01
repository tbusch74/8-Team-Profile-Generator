const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
teamMemberArray = []

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
          if (err) {
            reject(err);
            return;
          }
          resolve({
            ok: true,
            message: 'File created!'
          });
        });
    });
};

const promptTeamMembers = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "What is this team member's role?",
            choices: ['Engineer', 'Intern', 'Manager']
          },{
            type: 'input',
            name: 'name',
            message: "What is your team member's name? (Required)",
            validate: nameInput => {
                if(nameInput){
                    return true
                }else {
                    console.log("Please enter your team member's name!")
                    return false
                }
            }
        },{
            type: 'input',
            name: 'id',
            message: "What is your team member's id? (Required)",
            validate: nameInput => {
                if(nameInput){
                    return true
                }else {
                    console.log("Please enter your team member's id!")
                    return false
                }
            }
        },{
            type: 'input',
            name: 'email',
            message: "What is your team member's email? (Required)",
            validate: nameInput => {
                if(nameInput){
                    return true
                }else {
                    console.log("Please enter your team member's email!")
                    return false
                }
            }
        },{
            type: 'input',
            name: 'officeNumber',
            message: "Please provide the manager's office number",
            when: ({role}) => {
                if(role === 'Manager') {
                    return true;
                }else{
                    return false;
                }
            }
        },{
            type: 'input',
            name: 'github',
            message: "Please provide the engineer's github name",
            when: ({role}) => {
                if(role === 'Engineer') {
                    return true;
                }else{
                    return false;
                }
            }
        },{
            type: 'input',
            name: 'school',
            message: "Please provide the intern's school",
            when: ({role}) => {
                if(role === 'Intern') {
                    return true;
                }else{
                    return false;
                }
            }
        },{
            type: 'confirm',
            name: 'confirmAddTeamMember',
            message: 'Would you like to add another team member?',
            default: false
        }
    ])
    .then(employeeData => {
        if(employeeData.role === 'Manager'){
            teamMemberArray.push(new Manager(employeeData.name,employeeData.id,employeeData.email,employeeData.officeNumber));
        }else if(employeeData.role === 'Engineer'){
            teamMemberArray.push(new Engineer(employeeData.name,employeeData.id,employeeData.email,employeeData.github));
        }else if(employeeData.role === 'Intern'){
            teamMemberArray.push(new Intern(employeeData.name,employeeData.id,employeeData.email,employeeData.school));
        };
        if (employeeData.confirmAddTeamMember) {
            return promptTeamMembers()
        }else{
            return teamMemberArray;
        };

    });
};

promptTeamMembers ()
    .then(teamMemberArray => {
        return generateHTML(teamMemberArray)
    })
    .then(pageHTML => {
        return writeFile (pageHTML)
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    });