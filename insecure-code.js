// -------------------------------------------------------------------------------------
// Example: Vulnerable Code (Command Injection) - added to trigger code scanning alert
// -------------------------------------------------------------------------------------

const { exec } = require('child_process');
const runUserCommand = (userInput) => {
    exec(`ls ${userInput}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        console.log(`Output: ${stdout}`);
    });
};
runUserCommand("rm -rf *")

// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');
const userId = req.query.id;

db.get("SELECT * FROM users WHERE id = " + userId, (err, row) => {
  if (err) throw err;
  console.log(row);
});

// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------

const path = require('path');
const cwd = '/safe/directory';

var srcpath = path.resolve(cwd, header.linkname);
console.log(srcpath);

// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------

const express = require('express');
const app = express();

app.get('/run', (req, res) => {
  const result = eval(req.query.code); 
  res.send(`Result: ${result}`);
});

// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
