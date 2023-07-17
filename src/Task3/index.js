import React, { useState } from "react";
import { Container, Row, Form, Button, Alert } from "react-bootstrap";
import CommonInput from "../common/Input/index";

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [subject1, setSubject1] = useState("");
  const [subject2, setSubject2] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);

    // Check if all required fields are filled
    const errors = {};
    if (!firstName) {
      errors.firstName = "First Name is required.";
    }
    if (!surname) {
      errors.surname = "Surname is required.";
    }
    if (!title) {
      errors.title = "Title is required.";
    }
    if (!email) {
      errors.email = "Email is required.";
    }
    if (dateOfBirth === null) {
      errors.dateOfBirth = "Date of Birth is required.";
      console.log(!dateOfBirth, "dob");
    }
    if (!subject1) {
      errors.subject1 = "Subject 1 is required.";
    }
    if (!subject2) {
      errors.subject2 = "Subject 2 is required.";
    }

    // Check if there are any errors
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      console.log(formErrors, "errors");
    } else {
      console.log({
        firstName,
        surname,
        title,
        email,
        dateOfBirth,
        subject1,
        subject2,
      });
      setFormErrors({});
    }
  };

  return (
    <Container className="m-4">
      <Row>
        <Form onSubmit={handleSubmit}>
          <CommonInput
            label="First Name"
            value={firstName}
            type="text"
            maxLength={25}
            onChange={setFirstName}
            width={"30%"}
            required
          />
          <CommonInput
            label="Surname"
            value={surname}
            type="text"
            maxLength={25}
            width={"30%"}
            onChange={setSurname}
            required
          />
          <CommonInput
            label="Title"
            value={title}
            type="text"
            width={"30%"}
            onChange={setTitle}
            required
          />
          <CommonInput
            label="E-mail"
            value={email}
            type="email"
            maxLength={50}
            width={"30%"}
            onChange={setEmail}
            required
          />
          <CommonInput
            label="Date of Birth"
            value={dateOfBirth}
            width={"30%"}
            isDate
            
            onChange={setDateOfBirth}
            required
          />
          <CommonInput
            label="Subject 1"
            value={subject1}
            type="text"
            width={"30%"}
            onChange={setSubject1}
            required
          />
          <CommonInput
            label="Subject 2"
            value={subject2}
            type="text"
            width={"30%"}
            onChange={setSubject2}
            required
          />

          <Button className="mt-4" type="submit">
            Submit
          </Button>
          {isFormSubmitted && Object.keys(formErrors).length > 0 && (
            <Alert className="mt-4" style={{width:"30%"}} variant="danger">
              Please fill in the required fields:
              <ul>
                {Object.values(formErrors).map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </Alert>
          )}
        </Form>
      </Row>
    </Container>
  );
};

export default RegistrationForm;
