const express = require('express');
const path = require('path');
const multer = require('multer');
const app = express();
const port = 3000;

app.use(express.static(__dirname));

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/upload', upload.single('csvFile'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    const fileBuffer = req.file.buffer.toString();
    res.send(fileBuffer);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
