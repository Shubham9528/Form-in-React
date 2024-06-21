import React, { useState } from "react";
import axios from "axios";

function Form() {
  const initialState = {
    fname: "",
    lname: "",
    email: "",
    contact: "",
    gender: "",
    subject: "",
    url: "",
    choice: "",
    about: "",
    file: null,
  };

  const [data, setData] = useState(initialState);

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;

    if (type === "file") {
      setData((preValue) => {
        return {
          ...preValue,
          [name]: files[0],
        };
      });
    } else {
      setData((preValue) => {
        return {
          ...preValue,
          [name]: value,
        };
      });
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    
    // const formData = new FormData();
    // for (const key in data) {
    //   formData.append(key, data[key]);
    // }

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

  return (
    <div className="App">
      <h1>Form in React</h1>
      <form className="form" onSubmit={handleClick}>
        <div className="form-group">
          <label>First Name</label>
          <input
            onChange={handleChange}
            type="text"
            name="fname"
            className="input-field input-info"
            value={data.fname}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            onChange={handleChange}
            type="text"
            name="lname"
            className="input-field input-info"
            value={data.lname}
            required
          />
        </div>
        <div className="form-group">
          <label>Enter Email</label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            className="input-field input-info"
            value={data.email}
            required
          />
        </div>
        <div className="form-group">
          <label>Contact</label>
          <input
            onChange={handleChange}
            type="text"
            name="contact"
            className="input-field input-info"
            value={data.contact}
            required
          />
        </div>
        <div className="form-group">
          <p>Gender</p>
          <div className="radio-group-gender">
            <input
              onChange={handleChange}
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={data.gender === "male"}
            />
            <label htmlFor="male">Male</label>
            <input
              onChange={handleChange}
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={data.gender === "female"}
            />
            <label htmlFor="female">Female</label>
            <input
              onChange={handleChange}
              type="radio"
              id="other"
              name="gender"
              value="other"
              checked={data.gender === "other"}
            />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <div className="form-group">
          <p>Subject</p>
          <div className="radio-group-subject">
            <input
              onChange={handleChange}
              type="radio"
              id="english"
              name="subject"
              value="english"
              checked={data.subject === "english"}
            />
            <label htmlFor="english">English</label>
            <input
              onChange={handleChange}
              type="radio"
              id="maths"
              name="subject"
              value="maths"
              checked={data.subject === "maths"}
            />
            <label htmlFor="maths">Maths</label>
            <input
              onChange={handleChange}
              type="radio"
              id="physics"
              name="subject"
              value="physics"
              checked={data.subject === "physics"}
            />
            <label htmlFor="physics">Physics</label>
          </div>
        </div>
        <div className="form-group upload">
          <p>Upload Resume</p>
          <input
            onChange={handleChange}
            type="file"
            name="file"
            className="file-upload"
            accept=".pdf,.doc,.docx"
          />
        </div>
        <div className="form-group">
          <label>
            Enter URL<sub>*</sub>
          </label>
          <input
            onChange={handleChange}
            type="url"
            name="url"
            className="input-field input-info"
            value={data.url}
            required
          />
        </div>
        <div className="form-group select">
          <p>Select your choice</p>
          <select
            onChange={handleChange}
            name="choice"
            className="select-field"
            value={data.choice}
            required
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className="form-group about">
          <p>About</p>
          <textarea
            onChange={handleChange}
            name="about"
            className="textarea-field"
            value={data.about}
            placeholder="Write something about yourself..."
          />
        </div>
        <div className="button-group button">
          <button type="reset" className="reset-button">
            Reset
          </button>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
