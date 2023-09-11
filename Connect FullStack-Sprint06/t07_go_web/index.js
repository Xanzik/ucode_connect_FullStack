const express = require('express');
const ejs = require('ejs');
const normal = require('./normal-router');
const quantum = require('./quantum-router');

const app = express();
const port = 3000;

// Устанавливаем EJS как движок для шаблонов
app.set('view engine', 'ejs');

// Определяем маршруты
app.get('/normal', (req, res) => {
  const normalTime = normal.calculateTime();
  res.render('normal', { years: normalTime.years(), months: normalTime.months(), days: normalTime.days() });
});

app.get('/quantum', (req, res) => {
  const quantumTime = quantum.calculateTime();
  res.render('quantum', { years: quantumTime[0], months: quantumTime[1], days: quantumTime[2] });
});

// Здесь normal.ejs и quantum.ejs - это ваши шаблоны .ejs
// Они должны находиться в каталоге "views" вашего проекта.

// Запускаем сервер
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
