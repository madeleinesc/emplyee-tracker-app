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
  const data = await inquirer.prompt({
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
async function allDepartments() {
  db.query('SELECT departments.dpt_name AS Department, departments.id AS DepartmentId FROM departments', function(err, results) {
    if (err) throw err;
    console.log("Now viewing all departments:")
    console.table(results);
    init()
  })
}

//function for allRoles
async function allRoles() {
  db.query('SELECT roles.id AS RoleId, roles.title AS Role, roles.salary AS Salary, departments.dpt_name AS Department FROM roles JOIN departments ON roles.dpt_id = departments.id', function (err, results) {
    if (err) throw err;
    console.log("Now viewing all employee roles:")
    console.table(results);
    init()
  })
}

//function for allEmployees

//function for newDepartment

//function for newRole

//function for newEmployee

//function for updateEmployee

// initialise app
init()






// module export








