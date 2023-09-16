const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const File = require('./File');
const FileList = require('./FileList');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

const fileList = new FileList();

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'index.html');
});

app.post('/create-file', (req, res) => {
    const fileName = req.body.fileName;
    const fileContent = req.body.fileContent;

    if (!fileName || !fileContent) {
        res.status(400).send('File name and content are required.');
        return;
    }

    const filePath = `tmp/${fileName}`;

    // Check if the directory 'tmp' exists, create it if not
    if (!fs.existsSync('tmp')) {
        fs.mkdirSync('tmp');
    }

    if (fs.existsSync(filePath)) {
        // Append content if the file already exists
        fileList.selectFile(fileName);
        fileList.writeToFile(fileName, fileContent);
    } else {
        // Create a new file
        const file = new File(filePath, fileContent);
        file.create();
        fileList.addFile(file);
    }

    const fileNames = fileList.getList();
    res.json(fileNames);
});

app.get('/list-files', (req, res) => {

    fs.readdir('tmp', (err, files) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Error reading directory.' });
            return;
        }
        

        res.json(files);
    });
});

app.get('/get-file', (req, res) => {
    const fileName = req.query.fileName;
    const file = fileList.getFileByName(fileName);
    if (file) {
        res.json({ name: file.name, content: file.read() });
    } else {
        res.status(404).json({ error: 'File not found.' });
    }
});

app.post('/delete-file', (req, res) => {
    const fileName = req.body.fileName;
    fileList.deleteFileByName(fileName);
    const filePath = `tmp/${fileName}`;
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
    }

    res.status(200).send('File deleted successfully');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
