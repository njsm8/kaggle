const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')
const { argv } = require('yargs')
const log = console.log

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log('Title: ' + argv.title )
        console.log('\n Body: '+ argv.body )
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing the note!')
    }
})

yargs.command({
    command: 'list',
    describe: 'List the note',
    handler: function() {
        console.log('Listing the note!')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read the note',
    handler: function() {
        console.log('Reading the note!')
    }
})


yargs.parse()

