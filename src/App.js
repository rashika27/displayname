import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const [fullName, setFullName] = useState("");
  const [errorMessages, setErrorMessages] = useState({
    firstName: "",
    lastName: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if both fields are filled before proceeding
    if (formData.firstName && formData.lastName) {
      const fullNameValue = `${formData.firstName} ${formData.lastName}`;
      setFullName(fullNameValue);
      // Clear warning messages
      setErrorMessages({
        firstName: "",
        lastName: "",
      });
    } else {
      // Display warning messages for empty fields
      setErrorMessages({
        firstName: formData.firstName ? "" : "⚠️ Please fill out this field",
        lastName: formData.lastName ? "" : "⚠️ Please fill out this field",
      });
    }
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <span style={{ color: "orange" }}>{errorMessages.firstName}</span>
        </label>

        <br />

        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          <span style={{ color: "orange" }}>{errorMessages.lastName}</span>
        </label>

        <br />

        <button type="submit">Submit</button>
      </form>

      {fullName && (
        <div>
          <p>Full Name: {fullName}</p>
        </div>
      )}
    </div>
  );
};

export default App;
