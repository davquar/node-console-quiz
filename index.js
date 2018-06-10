const readline = require('readline');
var fs = require('fs');
const query = require('cli-interact').getNumber;
const questions = JSON.parse(fs.readFileSync('questions.json'));

let index = 0;
for (const question in questions) {
    console.log(++index + ". " + question);
    
    let choiceIndex = 0;
    for (const choice in questions[question]) {
        console.log(`    [${choiceIndex++}]. ${questions[question][choice].answer}`);
    }
    
    const answer = query("    Your answer: ");
    handleAnswer(question, answer);
}

function handleAnswer(question, answer) {
    if (questions[question][answer].correct)
        console.log('    \x1b[32m%s\x1b[0m', 'CORRECT!');
    else
        console.log('    \x1b[31m%s\x1b[0m', 'WRONG!');
}