const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();

// Use middleware to parse JSON data from requests
app.use(bodyParser.json());

// Serve static files (like HTML, CSS, and JavaScript)
app.use(express.static(__dirname));

// Store notes data in a JSON file
const dataFile = 'notes.json';

// Read existing notes from the JSON file
function readNotesFromFile() {
    try {
        const data = fs.readFileSync(dataFile, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
}

// Get all notes
app.get('/api/notes', (req, res) => {
    const notes = readNotesFromFile();
    res.json(notes);
});

// Add a new note
app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    const notes = readNotesFromFile();
    notes.push(newNote);
    fs.writeFileSync(dataFile, JSON.stringify(notes));
    res.json({ message: 'Note added successfully' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
