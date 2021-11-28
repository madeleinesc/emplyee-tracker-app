// Dependencies
require('dotenv').config(); // for .env
// Import mysql2 package
const mysql = require('mysql2');
// import inquirer package
const inquirer = require('inquirer');
// import console.table package
const consoleTbl = require('console.table');




// create connection to database
const db = mysql.createConnection(
  {
    host: 'localhost',

    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },
  console.log(
    `=== WELCOME TO THE EMPLOYEE TRACKER ===`
  )
);


// async function/user prompts
async function init() {
  //prompt user to choose an option
  await inquirer.prompt({
    type: 'list',
    name: 'menu',
    message: "Please choose from the following options:",
    choices: [
      'View all departments',
      'View all roles',
      'View all employees',
      'Add a department',
      'Add a role',
      'Add an employee',
      'Update an employees role',
      'Exit'
    ]
  });
  switch(data.menu) {
    case 'View all departments':
      // code block
      allDepartments();
      break;
    
    case 'View all roles':
      // code block
      allRoles();
      break;

    case 'View all employees':
      // code block
      allEmployees();
      // breaks out of switch block
      break;

    case 'Add a department':
      // code block
      addDepartment();
      // breaks out of switch block
      break;

    case 'Add a role':
      // code block
      addRole();
      // breaks out of switch block
      break;

    case 'Add am employee':
      // code block
      addEmployee();
      // breaks out of switch block
      break;

    case 'Update a employees role':
      // code block
      UpdateEmployee();
      // breaks out of switch block
      break;

    case 'Exit':
      connection.end();
      break; 
  }
}

// function for allDepartments


//function for allRoles

//function for allEmployees

//function for newDepartment

//function for newRole

//function for newEmployee

//function for updateEmployee

// initialise app
init()






// module export








