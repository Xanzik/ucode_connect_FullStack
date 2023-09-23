const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const { findUserByLoginAndPassword } = require('./model');
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
    console.log(user);
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

app.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

app.get('/user-status', async (req, res) => {
  if (req.session.loggedIn) {
    const userId = req.session.user.id;

    const query = 'SELECT status FROM users WHERE id = ?';
    db.query(query, [userId], (err, results) => {
      if (err) {
        console.error('Database error: ' + err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        if (results.length > 0) {
          const userStatus = results[0].status;
          res.json({ userStatus });
        } else {
          res.status(404).json({ error: 'User not found' });
        }
      }
    });
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
