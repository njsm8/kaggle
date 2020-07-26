const fs = require('fs');
const chalk = require('chalk')
const { timeEnd } = require('console');

const getNotes = function (){
    return "Your notes...";
}

const addNote = function(title, body) {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log("New note added!")
    } else {
        console.log("Note title taken!")
    }


}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
   try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)

   } catch (e) {
       return []
       
   }
    
    
    
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes'))

    notes.forEach((note))
}
const removeNote = function(title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function (note){
        return note.title !== title
    })
    saveNotes(notesToKeep)

    if (notes.length > notesToKeep.length) {
       console.log(chalk.green.inverse('Note removed!'))
    } else {
       console.log(chalk.red.inverse('No note found!'))
    }


}


const readNote = function(title) {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red('No note found!'))
    }
}

module.exports ={
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}