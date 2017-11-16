#!/usr/bin/env node

const program = require('commander');
const { prompt } = require('inquirer');

const {
    turnOn,
    turnOff
} = require('./index');

// Initializing commander
program
    .version('0.0.1')
    .description('Yamaha Remote Control CLI');

// Turn On Receiver Questions
const questions = [
    {
        type: 'input',
        name: 'ip',
        message: 'Receivers IP (Or nothing to search in network)'
    }
];

// TurnOn Command
program
    .command('turnOn')
    .alias('on')
    .description('Turn on receiver')
    .action(() => {
        prompt(questions).then(answers => {
                if(answers.input !== null && answers.input !== undefined) {
                    turnOn(answers.input)
                } else {
                    turnOn();
                }
            }
        );
    });

// TurnOff Command
program
    .command('turnOff')
    .alias('off')
    .description('Turn Receiver off')
    .action(() => {
        prompt(questions).then(answers => {
                if(answers.input !== null && answers.input !== undefined) {
                    turnOff(answers.input)
                } else {
                    turnOff();
                }
            }
        );
    });

program.parse(process.argv);