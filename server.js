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
    console.log("=== NOW VIEWING ALL DEPARTMENTS IN DATABASE ===")
    console.table(results);
    init()
  })
}

//function for allRoles
async function allRoles() {
  db.query('SELECT roles.id AS RoleId, roles.title AS Role, roles.salary AS Salary, departments.dpt_name AS Department FROM roles JOIN departments ON roles.dpt_id = departments.id', function (err, results) {
    if (err) throw err;
    console.log("=== NOW VIEWING ALL ROLES IN DATABASE ===")
    console.table(results);
    init()
  })
}

//function for allEmployees
async function allEmployees() {
  db.query('SELECT employees.id AS EmployeeId, employees.first_name AS FirstName, employees.last_name AS LastName, roles.title AS Role, roles.salary AS Salary, departments.dpt_name AS Department, employees.manager_id AS ManagerId FROM employees JOIN roles ON employees.role_id = roles.id JOIN departments ON roles.dpt_id = departments.id ORDER BY employees.id', function (err, results) {
    if (err) throw err;
    console.log("=== NOW VIEWING ALL EMPLOYEES IN DATABASE ===")
    console.table(results);
    init()
  })
}


//function for addDepartment
function addDepartment() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'addDepartment',
      message: 'Please enter a new department'
    }
  ]).then(function (answer) {
    db.query('INSERT INTO departments (dpt_name) VALUES (?)', [answer.addDepartment], function (err, results) {
      const query = 'SELECT * FROM departments';
      db.query(query, function (err, results) {
        if (err) throw err;
        console.log("=== DEPARTMENT HAS BEEN ADDDED ===")
        console.table(results);
        addDepartment()
        init()
      })
    })
  })
}


//function for addRole
function addRole() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'addRole',
      message: 'Please enter a new role'
    },
    {
      type: 'input',
      name: 'salary',
      message: 'Please enter a salary figure:',
      validate: value => {
        if(isNaN(value) === false) return true;
        return false;
      }
    },
    {
      type: 'input',
      name: 'department',
      message: 'Please enter the department the role is in'
    }
  ]).then(function (answer) {
    db.query('INSERT INTO departments (name) VALUES (?)', [answer.addRole], function (err, results) {
      const query = 'SELECT * FROM departments';
      db.query(query, function (err, results) {
        if (err) throw err;
        console.log("=== ROLE HAS BEEN ADDDED ===")
        console.table(results);
        addRole()
        init()
      })
    })
  })
}

//function for addEmployee

//function for updateEmployee

// initialise app
init()






// module export








