const express = require('express');
const session = require('express-session');
const app = express();
const port = 3000;

// Configure sessions
app.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: true
}));

// Serve static files (HTML and JavaScript) directly from the root directory
app.use(express.static(__dirname));

// Parse JSON request bodies
app.use(express.json());

// Handle POST request to save data in session
app.post('/save-data', (req, res) => {
    const { name, description, photo, superpowers, publicness } = req.body;

    const data = {
        name,
        description,
        photo,
        superpowers,
        publicness
    };

    req.session.data = data;
    res.json({ message: 'Data saved successfully' });
});

// Handle POST request to forget data in session
app.post('/forget-data', (req, res) => {
    delete req.session.data;
    res.json({ message: 'Data forgotten' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
