// Example: Vulnerable Code (Command Injection) - added to trigger code scanning alert
const { exec } = require('child_process');

function runUserCommand(userInput) {
    // VULNERABLE: Direct concatenation of user input into a command
    exec(`ls ${userInput}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        console.log(`Output: ${stdout}`);
    });
}

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

// User input from a query parameter
const userId = req.query.id;

// TRIGGER: Direct concatenation of untrusted input into a SQL query
db.get("SELECT * FROM users WHERE id = " + userId, (err, row) => {
  if (err) throw err;
  console.log(row);
});
