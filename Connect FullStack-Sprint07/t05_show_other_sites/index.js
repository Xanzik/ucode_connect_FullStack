const express = require('express');
const fetch = require('node-fetch');
const cheerio = require('cheerio'); // Import the cheerio library

const app = express();
const port = 3000;

app.use(express.static(__dirname));
app.use(express.json());

app.post('/fetch-content', async (req, res) => {
    try {
        const url = req.body.url;

        // Fetch the HTML content from the specified URL
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const html = await response.text();

        // Use cheerio to parse the HTML content
        const $ = cheerio.load(html);

        // Extract the content between the <body> tags
        const bodyContent = $('body').html();

        if (bodyContent) {
            res.status(200).send(bodyContent);
        } else {
            res.status(500).send("No content found between <body> tags.");
        }
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
