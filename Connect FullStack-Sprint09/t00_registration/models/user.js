class User {
  constructor(login, password, full_name, email_address, db) {
    this.login = login;
    this.password = password;
    this.full_name = full_name;
    this.email_address = email_address;
    this.db = db;
  }

  saveToDatabase(callback) {
    const sql = 'INSERT INTO users (login, password, full_name, email_address) VALUES (?, ?, ?, ?)';
    const values = [this.login, this.password, this.full_name, this.email_address];

    this.db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Database error: ' + err);
        callback(err, null);
        return;
      }

      console.log('User registered successfully');
      callback(null, 'User registered successfully');
    });
  }
}

module.exports = User;
