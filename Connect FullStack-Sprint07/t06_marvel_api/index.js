const express = require('express');
const app = express();
const path = require('path');
const fetch = require('node-fetch');
const crypto = require('crypto-js');

const publicKey = 'ba0e8f0687e840dcf4986dbd53f14a66';
const privateKey = '02cdfaffcbe5df286ddebc236102cc5209e4ad59';

function generateHash(timestamp) {
    const input = timestamp + privateKey + publicKey;
    const hash = crypto.MD5(input).toString();
    return hash;
}

app.use(express.static(__dirname));

app.get('/api/characters', async (req, res) => {
    const timestamp = new Date().getTime();
    const hash = generateHash(timestamp);

    const apiUrl = 'https://gateway.marvel.com/v1/public/characters';
    const requestUrl = `${apiUrl}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

    try {
        const response = await fetch(requestUrl);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error:', error);
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`On ${port}`);
});
