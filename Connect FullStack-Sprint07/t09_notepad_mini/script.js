import { Note } from './Note.js';
import { Notepad } from './Notepad.js';

const notepad = new Notepad();

document.getElementById('add-note').addEventListener('click', () => {
    const noteName = document.getElementById('note-name').value;
    const noteImportance = document.getElementById('note-importance').value;
    const noteContent = document.getElementById('note-content').value;

    const note = new Note(noteName, noteImportance, noteContent);
    notepad.addNote(note);
    notepad.displayNotes();
});

window.showDetails = function(name, importance, content, date) {
    alert(`Note Name: ${name}\nNote Importance: ${importance}\nNote Content: ${content}\nDate: ${date}`);
};