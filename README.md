# 📋 React Form Submission with Express and PostgreSQL

This project demonstrates how to create a React form, submit data to an Express server, and store it in a PostgreSQL database. The form includes various input types such as text fields, radio buttons, a file upload, and more.

## 🚀 Getting Started



### 📚 Prerequisites

Make sure you have the following software installed on your system:

#(Node.js
PostgreSQL
npm

🛠 Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/react-express-postgres-form.git
cd react-express-postgres-form
Install server dependencies:

bash
Copy code
cd server
npm install
Install client dependencies:

bash
Copy code
cd ../client
npm install
🗄 Database Setup
Create the PostgreSQL database and table:

Open your PostgreSQL client (like pgAdmin or psql) and run the following SQL commands:

sql
Copy code
CREATE DATABASE "register-form";

\c register-form;

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
Update database configuration:

In server/server.js, update the Client configuration with your PostgreSQL credentials if they differ.

🚀 Running the Application
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
##📝 Form Fields
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
##🔧 Code Overview
Client (React)
App.js: The main application component that renders the form.
Form.jsx: Contains the form component with state management and form submission logic.
Server (Express)
server.js: Sets up the Express server, connects to the PostgreSQL database, and defines the /submit endpoint to handle form submissions.
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
##🤝 Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

##📜 License
This project is licensed under the -- License.

##📞 Contact
For any questions or support, please reach out to shubhamshindel9528@gmail.com.
