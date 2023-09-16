// File.js
const fs = require('fs');

class File {
    constructor(name, content) {
        this.name = name;
        this.content = content || ''; // Default content is an empty string
    }

    create() {
        fs.writeFileSync(this.name, this.content);
    }

    read() {
        try {
            return fs.readFileSync(this.name, 'utf8');
        } catch (error) {
            console.error(`Error reading file '${this.name}': ${error.message}`);
            return null;
        }
    }

    update(newContent) {
        fs.writeFileSync(this.name, newContent);
    }

    delete() {
        try {
            fs.unlinkSync(this.name);
        } catch (error) {
            console.error(`Error deleting file '${this.name}': ${error.message}`);
        }
    }

    write(newContent) {
        fs.appendFileSync(this.name, newContent);
    }
}

module.exports = File;
