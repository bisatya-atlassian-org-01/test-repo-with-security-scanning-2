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
