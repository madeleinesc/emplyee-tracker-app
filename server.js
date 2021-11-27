// Dependencies
require('dotenv').config(); // for .env
// Import mysql2 package
const mysql = require('mysql2');
// import inquirer package
const inquirer = require('inquirer');
// import console.table package
require('console.table');


// create connection to database
const newConnect = mysql.createConnection(
    {
      host: 'localhost',
      
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    }
  );

// async function/user prompts?



// module export



