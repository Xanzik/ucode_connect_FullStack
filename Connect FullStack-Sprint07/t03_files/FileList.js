// FileList.js
class FileList {
    constructor() {
        this.files = [];
        this.selectedFile = null;
    }

    addFile(file) {
        this.files.push(file);
    }

    selectFile(fileName) {
        this.selectedFile = this.getFileByName(fileName);
        if (!this.selectedFile) {
            console.error(`File '${fileName}' not found.`);
        }
    }

    writeToFile(fileName, newContent) {
        const file = this.getFileByName(fileName);
        if (file) {
            file.write(newContent);
        } else {
            console.error(`File '${fileName}' not found.`);
        }
    }

    getList() {
        return this.files.map(file => file.name);
    }

    hasFiles() {
        return this.files.length > 0;
    }

    getHTMLList() {
        let htmlList = '<ul>';
        this.files.forEach(file => {
            htmlList += `<li>${file.name}</li>`;
        });
        htmlList += '</ul>';
        return htmlList;
    }

    getFileByName(name) {
        return this.files.find(file => file.name === name);
    }

    deleteFileByName(name) {
        const index = this.files.findIndex(file => file.name === name);
        if (index !== -1) {
            this.files.splice(index, 1);
        }
    }
    
}

module.exports = FileList;
