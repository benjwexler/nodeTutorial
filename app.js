console.log('starting app');

const fs = require('fs');
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')


const argv = yargs.argv
let command = argv._[0]
console.log(`command: ${command}` )
console.log('Yargs', argv);


if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body)
    notes.messageUser(note, `Note created!`, `Note already exists`)

} else if (command === 'list') {
    notes.getAll()
} else if (command === 'read') {
    var note = notes.readNote(argv.title)

    notes.messageUser(note, `Note found!`, `Note not found`)


    // var message = noteBody ? `Note Reads: ${noteBody}` : `Note not found with title ${argv.title}`


    
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);

    var message = noteRemoved ? "Note Removed" : `Note not found with title ${argv.title}`

    console.log(message)
} else {
    console.log("command not found")
}
