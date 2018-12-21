console.log("starting Notes.js")

const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json')
        return JSON.parse(notesString)
    } catch (e) {
        return [];
    }
};

var messageUser = (note, messageIfTrue, messageIfFalse) => {

    if(note) {
        console.log(messageIfTrue)
        console.log('--')
        console.log(`Title: ${note.title}`)
        console.log(`Body: ${note.body}`)
    } else {
        console.log(messageIfFalse) 
    }
};

var saveNotes = (notes) => {

    fs.writeFileSync('notes-data.json', JSON.stringify(notes));

};

var addNote = (title, body) => {

    var notes = fetchNotes()

    var note = {
        title,
        body
    };



    var duplicatesNotes = notes.filter((note) => note.title === title);
    console.log(duplicatesNotes)

    if (duplicatesNotes.length === 0) {
        notes.push(note)
        saveNotes(notes)
        return note  
    } 

};


var getAll = (title, body) => {
    console.log('getting all notes')
}

var readNote = (title) => {
    console.log(`Reading ${title}`)
    var notes = fetchNotes()
    var correctNoteArray = notes.filter((note) => note.title === title);

    if (correctNoteArray.length !== 0) {
        var note = correctNoteArray[0]
        return note
    }

    

}

var removeNote = (title) => {
    //fetch notes
    var notes = fetchNotes()

    var newNotes= notes.filter((note) => note.title !== title);

    saveNotes(newNotes)


    // if the lengths are the same (false) then a note was NOT removed
    return notes.length !== newNotes.length



    //filter notes, removing the one with title of argument 
    // save new notes array
}



module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote,
    messageUser
}

