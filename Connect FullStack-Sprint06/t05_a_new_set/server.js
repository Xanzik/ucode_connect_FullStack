const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000;

const data = []; // Массив для хранения данных

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        if (req.url === '/') {
            // Обслуживаем главную страницу (index.html)
            fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                    return;
                }

                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            });
        } else if (req.url === '/script.js') {
            // Обслуживаем скрипт (script.js)
            fs.readFile(path.join(__dirname, 'script.js'), (err, data) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                    return;
                }

                res.writeHead(200, { 'Content-Type': 'application/javascript' });
                res.end(data);
            });
        } else if (req.url === '/get-data') {
            // Обслуживаем запрос на получение данных
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(data));
        } else {
            // Обслуживаем другие ресурсы (например, стили, изображения) здесь
            const filePath = path.join(__dirname, req.url);

            fs.readFile(filePath, (err, data) => {
                if (err) {
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.end('Not Found');
                    return;
                }

                const extname = path.extname(filePath);
                const contentType = {
                    '.html': 'text/html',
                    '.js': 'application/javascript',
                    '.css': 'text/css',
                    // Добавьте больше типов контента при необходимости
                }[extname] || 'text/plain';

                res.writeHead(200, { 'Content-Type': contentType });
                res.end(data);
            });
        }
    } else if (req.method === 'POST' && req.url === '/submit') {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            const formData = JSON.parse(body);

            // Сохраняем полученные данные в массив
            data.push(formData);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(formData));
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
