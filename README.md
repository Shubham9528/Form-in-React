# 📋 React Form Submission with Express and PostgreSQL

This project demonstrates how to create a React form, submit data to an Express server, and store it in a PostgreSQL database. The form includes various input types such as text fields, radio buttons, a file upload, and more.

## 🚀 Getting Started
![1](https://github.com/Shubham9528/Form-in-React/assets/81708211/c60aed6e-864d-403f-a770-1a4214f02d09)
![2](https://github.com/Shubham9528/Form-in-React/assets/81708211/6b97a62c-fb6a-4774-9c1d-7e1db4694af0)

![3](https://github.com/Shubham9528/Form-in-React/assets/81708211/d76434c6-5e66-4f52-a96f-57fcf3f79309)


### 📚 Prerequisites

Make sure you have the following software installed on your system:

- [Node.js](#Node.js)
- [PostgreSQL](#PostgreSQL)
- [npm](#npm)

## 🛠 Installation

Clone the repository:

bash
```
git clone https://github.com/your-username/react-express-postgres-form.git
cd react-express-postgres-form
```
Install server dependencies:

bash
```
cd server
npm install
```
Install client dependencies:

bash
```
cd ../client
npm install
```
## 🗄 Database Setup

Create the PostgreSQL database and table:

Open your PostgreSQL client (like pgAdmin or psql) and run the following SQL commands:

sql
```
CREATE DATABASE "register-form";
```

\c register-form;
```
CREATE TABLE register (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    contact VARCHAR(20),
    gender VARCHAR(10),
    subject VARCHAR(50),
    url TEXT,
    choice VARCHAR(10),
    about TEXT
);
```
Update database configuration:

In server/server.js, update the Client configuration with your PostgreSQL credentials if they differ.

## 🚀 Running the Application
Start the Express server:

bash
```
cd server
npm start
```
The server will start on http://localhost:3001.


Start the React application:

bash
```
cd ../client
npm start
The client will start on http://localhost:3000.
```
## 📝 Form Fields
The form includes the following fields:
```
First Name
Last Name
Email
Contact
Gender (Male, Female, Other)
Subject (English, Maths, Physics)
URL
Choice (1, 2, 3)
About (textarea)
File upload (Resume)
```
## 🔧 Code Overview
Client (React)

* App.js: The main application component that renders the form.

* Form.jsx: Contains the form component with state management and form submission logic.

Server (Express)

* server.js: Sets up the Express server, connects to the PostgreSQL database, and defines the /submit endpoint to handle form submissions.

🔗 API Endpoint

POST /submit

This endpoint receives form data from the client and inserts it into the PostgreSQL database.

Request Body:

json
```
{
  "fname": "John",
  "lname": "Doe",
  "email": "john.doe@example.com",
  "contact": "1234567890",
  "gender": "male",
  "subject": "english",
  "url": "http://example.com",
  "choice": "1",
  "about": "About me...",
  "file": null
}
```
## 📦 Dependencies Explained
### Axios
Axios is a promise-based HTTP client for the browser and Node.js. It makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations. In this project, Axios is used to send form data to the Express server.

bash
```
npm install axios
```
In the code:

jsx

```
import axios from 'axios';

const handleClick = (event) => {
  event.preventDefault();

  axios.post('http://localhost:3001/submit', data)
    .then((response) => {
      alert(response.data);
      setData(initialState); // Reset the form fields
    })
    .catch((error) => {
      console.error('There was an error!', error);
      alert('There was an error submitting the form. Please try again.');
    });
};
```
body-parser: 

Body-parser is a middleware that parses incoming request bodies in a middleware before your handlers, available under the req.body property. It's used to handle POST requests in Express.

bash
```
npm install body-parser
```
In the code:
javascript

```
const bodyParser = require('body-parser');

app.use(bodyParser.json());
```
cors

CORS (Cross-Origin Resource Sharing) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the resource originated. It is used in this project to enable communication between the React frontend and the Express backend.

bash
```
npm install cors
```
In the code:

javascript
```
const cors = require('cors');

app.use(cors());
```
Express

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It's used to set up the server and define routes for handling API requests.

bash
```
npm install express
```
In the code:

javascript
```
Copy code
const express = require('express');
const app = express();
const port = 3001;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```
PostgreSQL:

PostgreSQL is a powerful, open source object-relational database system. In this project, it is used to store the form data submitted from the React frontend.

To interact with PostgreSQL, we use the pg package:

bash
```
npm install pg
```
In the code:

javascript
```
const { Client } = require('pg');

const db = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'register-form',
  password: 'Shubham@123',
  port: 5432,
});

db.connect();
```
## 🤝 Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## 📜 License
This project is licensed under the -- License.

## 📞 Contact
For any questions or support, please reach out to shubhamshindel9528@gmail.com.

Enjoy building with React, Express, and PostgreSQL! ✨
