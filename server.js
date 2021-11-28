// Dependencies
require('dotenv').config(); // for .env
// Import mysql2 package
const mysql = require('mysql2');
// import inquirer package
const inquirer = require('inquirer');
// import console.table package
require('console.table');


// create connection to database
const db = mysql.createConnection(
  {
    host: 'localhost',

    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },
  console.log(
    `Connected to employee database.`
  )
);


// async function/user prompts


// initialise app
async function init() {

  // start menu
  start = () => {
    //prompt user to choose an option
    return inquirer.prompt([
      {
        type: 'list',
        name: 'menu',
        message: "Welcome to the Employee Tracker App! Please choose from the following options:",
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
      }
    ])
  }; 
  start()

    .then(function(data) {
      if (data.start === 'View all departments') return allDepartments();

      if (data.start === 'View all roles') return allRoles();

      if (data.start === 'View all employees') return allEmployees();

      if (data.start === 'Add a department') return newDepartment();

      if (data.start === 'Add a role') return newRole();

      if (data.start === 'Add an employee') return newEmployee();

      if (data.start === 'Update an employees role') return updateEmployee();

    })
};
init();





// queries

// module export








