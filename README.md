# Node Console Quiz

As the name suggests, this is a simple command line quiz app, made with Node.

Just customize the questions in `questions.json` and run the app.

## Questions and Answers

Questions and answers are stored in `questions.json`.

Its syntax is:

```json
{
    "<question name>": [
        {
            "answer": "<answer description>",
            "correct": <true|false>
        },
        { ... },
        ...
    ],
    ...
}
```

Some things that are worth to note:

- You can create any amount of questions that you want;
  - With illimitate answers;
- You can set multiple correct answers for a question.

## How to play

Download or clone this repository, `cd` inside it, install the dependencies, and run it:

```bash
git clone https://github.com/fortym2/node-console-quiz [destination_folder]
cd [destination_folder]
npm install
npm start
```

For each question, write the answer number that you think is correct, and hit Enter.

You can skip a question by entering `0`, or any number that is not bound to an answer.

### Final stats

The quiz finishes when you have answered all the questions. Then you will see some brief stats telling how you did.

You can set custom weights for correct, wrong and skipped answers. The defaults are respectively 2, -1, 0.

## TODOs

This app is not yet customizable because this is how I need it now.
These are some ideas for the future:

- [ ] Ability to call it with custom options:
  - [ ] questions file path;
  - [ ] number of questions to display;
  - [ ] randomize the order of questions;
  - [ ] randomize the order of anwers;
  - [ ] answer weights.
- [ ] Ability to finish earlier.