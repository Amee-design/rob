const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 5000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ameerah@1',
  database: 'register'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

app.use(express.json());


app.post('/api/form', (req, res) => {
  const { name, email, message } = req.body;
  const formData = { name, email, message };

  connection.query('INSERT INTO your_table_name SET ?', formData, (error, results) => {
    if (error) {
      console.error('Error inserting form data into MySQL:', error);
      res.status(500).json({ success: false, message: 'Server error' });
      return;
    }

    console.log('Form data inserted into MySQL:', results);
    res.status(200).json({ success: true, message: 'Form data inserted successfully' });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

