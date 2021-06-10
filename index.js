const readline = require('readline');
var fs = require('fs');
const query = require('cli-interact').getNumber;
const questions = JSON.parse(fs.readFileSync('questions.json'));

const correctValue = 2;
const wrongValue = -1;
const skippedValue = 0;

let correctAnswers = 0;
let wrongAnswers = 0;
let skippedAnswers = 0;

let index = 0;
for (const question in questions) {
    console.log('\x1b[36m%s. %s\x1b[0m', ++index, question);
    
    let choiceIndex = 0;
    for (const choice in questions[question]) {
        console.log(`    [${++choiceIndex}]. ${questions[question][choice].answer}`);
    }
    
    const answer = query("    Your answer: ");
    handleAnswer(question, answer, choiceIndex);
    console.log("");
}

const score = correctAnswers*correctValue + wrongAnswers*wrongValue + skippedAnswers*skippedValue;
const maxScore = index*correctValue;
console.log(`\n\nAnswers: ${index}\n${correctAnswers} correct\n${wrongAnswers} wrong\n${skippedAnswers} skipped`);
console.log(`Your score is ${score}/${maxScore} ≈ ${(score/maxScore*100).toFixed(2)}%`);

function handleAnswer(question, answer, maxChoices) {
    if (answer === 0 || answer > maxChoices) {
        console.log('    SKIPPED');
        skippedAnswers++;
        return;
    }
    if (questions[question][answer-1].correct) {
        console.log('    \x1b[32m%s\x1b[0m', 'CORRECT!');
        correctAnswers++;
    } else {
         for (let i = 0; i < maxChoices; i++)
        {
            if (questions[question][i].correct) {
                console.log("correct answer: ",questions[question][i].answer);
            }
        }
        console.log('    \x1b[31m%s\x1b[0m', 'WRONG!');
        wrongAnswers++;
    }
}
