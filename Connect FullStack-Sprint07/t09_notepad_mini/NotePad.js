// Notepad.js

export class Notepad {
    constructor() {
        this.notes = [];
    }

    addNote(note) {
        this.notes.push(note);
    }

    displayNotes() {
        const noteList = document.getElementById('note-list');
        noteList.innerHTML = '';

        for (const note of this.notes) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `${note.date} > ${note.name} | <a href="#" onclick="showDetails('${note.name}', '${note.importance}', '${note.content}', '${note.date}')">Details</a>`;
            noteList.appendChild(listItem);
        }
    }
}
