const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');
const cors = require('cors');

const app = express();
const port = 3001;

const db = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'register-form',
  password: 'Shubham@123',
  port: 5432,
});

db.connect();

app.use(cors());
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
  const { fname, lname, email, contact, gender, subject, url, choice, about } = req.body;

  const query = `
    INSERT INTO register (first_name, last_name, email, contact, gender, subject, url, choice, about)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
  `;
  const values = [fname, lname, email, contact, gender, subject, url, choice, about];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Error inserting data', err);
      res.status(500).send('Error inserting data');
    } else {
      res.status(200).send('Data inserted successfully to database!!!');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
 /*
    Server-Side:

Use Express to set up an API endpoint (/submit) that listens for POST requests.
When the endpoint receives a request, it extracts the data from the request body and inserts it into the PostgreSQL database.
Use cors to handle cross-origin requests from your React app.
Client-Side:

Use axios to make a POST request to the server when the form is submitted.
Handle form field changes and submission as usual.
Reset the form fields after successful submission.
This approach separates your concerns: React handles the front-end, and Express handles the back-end and database operations.
    */ 
  
