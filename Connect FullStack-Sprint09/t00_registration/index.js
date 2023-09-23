const express = require('express');
const bodyParser = require('body-parser');
const { registerUserAndSaveToDatabase } = require('./model');
const { connectToDatabase } = require('./db');
  
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

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

app.post('/register', async (req, res) => {
  const { login, password, confirm_password, full_name, email_address} = req.body;

  if (password !== confirm_password) {
    res.status(400).json({ error: 'Passwords do not match' });
    return;
  }

  try {
    await registerUserAndSaveToDatabase(login, password, full_name, email_address, db, (err, result) => {
      if (err) {
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }

      res.status(201).json({ message: 'User registered successfully' });
    });
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});