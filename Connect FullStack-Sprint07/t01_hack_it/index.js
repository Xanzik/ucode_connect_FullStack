const express = require('express');
const fs = require('fs');
const session = require('express-session');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static(__dirname));

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

app.get('/', (req, res) => {
    fs.readFile('index.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.send(data);
    });
});

app.post('/save', (req, res) => {
    const { password, salt } = req.body;
    req.session.password = password;
    req.session.salt = salt;
    res.send('Data Saved');
});

app.post('/check', (req, res) => {
    const enteredPassword = req.body.guess;
    const savedPassword = req.session.password;

    if (enteredPassword === savedPassword) {
        res.send('Hacked!');
        req.session.destroy();
    } else {
        res.send('Incorrect.');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
