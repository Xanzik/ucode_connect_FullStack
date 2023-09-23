const User = require('./models/user');

function registerUserAndSaveToDatabase(login, password, full_name, email_address, db, callback) {
  const newUser = new User(login, password, full_name, email_address, db);
  newUser.saveToDatabase((err, result) => {
    if (err) {
      console.error('Database error: ' + err);
      callback(err, null);
      return;
    }
    callback(null, 'User registered successfully');
  });
}

module.exports = {
  registerUserAndSaveToDatabase,
};