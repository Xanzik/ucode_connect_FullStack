const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const { findUserByLoginAndPassword, sendPasswordReminderEmail } = require('./model');
const { connectToDatabase } = require('./db');
const User = require('./models/user')

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
}));

let db;

async function initializeDatabase() {
  try {
    db = await connectToDatabase();
  } catch (err) {
    console.error('Error initializing database:', err);
    process.exit(1);
  }
}

initializeDatabase();

app.post('/login', async (req, res) => {
  const { login, password } = req.body;

  try {
    let user = new User();
    user = await findUserByLoginAndPassword(login, password, db);
    if (user) {
      req.session.loggedIn = true;
      req.session.user = user;

      res.sendFile(__dirname + '/public/logged.html');
    } else {
      res.status(401).json({ error: 'Unauthorized' });
    }
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/forgot-password', (req, res) => {
  res.sendFile(__dirname + '/public/forgot-password.html');
});


app.post('/forgot-password', async (req, res) => {
  const { email } = req.body;
  const user = new User();
  await user.findUserByEmail(email, db, (err, user) => {
    if (user) {
      sendPasswordReminderEmail(email, user.password);
      res.status(200).json({ message: 'Password reminder sent to your email.' });
    } else {
      res.status(400).json({ error: 'Email not found.' });
    }
  });
});

app.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
