const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
let employeeInfo= []

function menu(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message:"Please select option ",
            choices:[
            "Create Manager",
            "Create Engineer",
            "Create Intern",
            "Build Team"
            ]
          },

    
    ])
    .then(function(answers){
        if(answers.menu==="Create Manager"){
            createManager()
        }
        else if(answers.menu==="Create Engineer"){
            createEngineer()
        }
        else if(answers.menu==="Create Intern"){
            createIntern()
        }
        else{
            // Build team function
        }
        })
}
function createManager(){
    inquirer.prompt([
        {
           message: "What is your name?",
           type:"input",
           name: "Name"
        },

        {
            message: "What is your ID?",
           type:"input",
           name: "ID"
        },

        {
            message: "What is your Email?",
           type:"input",
           name: "Email"
        },

        {
            message: "What is your office number?",
           type:"input",
           name: "OfficeNumber"
        }


    ])
    .then(function(answers){
        const newEmployee=new Manager(answers.Name,answers.ID,answers.Email,answers.OfficeNumber);
        employeeInfo.push(newEmployee)
        menu()
    }

    )
}
function createEngineer(){
    inquirer.prompt([
        {
           message: "What is your name?",
           type:"input",
           name: "Name"
        },

        {
            message: "What is your ID?",
           type:"input",
           name: "ID"
        },

        {
            message: "What is your Email?",
           type:"input",
           name: "Email"
        },

        {
            message: "What is your Github Link?",
           type:"input",
           name: "Github"
        }
    ])
    .then(function(answers){
        const newEmployee=new Engineer(answers.Name,answers.ID,answers.Email,answers.Github);
        employeeInfo.push(newEmployee)
        menu()
    }

    )
}
function createIntern(){
    inquirer.prompt([
        {
           message: "What is your name?",
           type:"input",
           name: "Name"
        },

        {
            message: "What is your ID?",
           type:"input",
           name: "ID"
        },

        {
            message: "What is your Email?",
           type:"input",
           name: "Email"
        },

        {
            message: "What is your School?",
           type:"input",
           name: "School"
        }
    ])
    .then(function(answers){
        const newEmployee=new Intern(answers.Name,answers.ID,answers.Email,answers.School);
        employeeInfo.push(newEmployee)
        menu()
    }

    )
}
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
