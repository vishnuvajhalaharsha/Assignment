import React, { useState } from "react";
import { Container, Row, Form, Button, Alert ,Col} from "react-bootstrap";
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
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);

    // set error
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
      setShowNotification(true);

      
      setTimeout(() => {
        setShowNotification(false);
      }, 2000);

      setFormErrors({});
      setFirstName("")
      setDateOfBirth(null)
      setEmail("")
      setSubject1("")
      setSubject2("")
      setSurname("")
      setTitle("")
    }
  };

  return (
    <Container className="m-4">
        <h2 > Task 3</h2>
      <Row>
        <Col>
        <Form onSubmit={handleSubmit}>
          <CommonInput
            label="First Name"
            value={firstName}
            type="text"
            maxLength={25}
            onChange={setFirstName}
            width={"100%"}
            required
          />
          <CommonInput
            label="Surname"
            value={surname}
            type="text"
            maxLength={25}
            width={"100%"}
            onChange={setSurname}
            required
          />
          <CommonInput
            label="Title"
            value={title}
            type="text"
            width={"100%"}
            onChange={setTitle}
            required
          />
          <CommonInput
            label="E-mail"
            value={email}
            type="email"
            maxLength={50}
            width={"100%"}
            onChange={setEmail}
            required
          />
          <CommonInput
            label="Date of Birth"
            value={dateOfBirth}
            width={"100%"}
            isDate
            
            onChange={setDateOfBirth}
            required
          />
          <CommonInput
            label="Subject 1"
            value={subject1}
            type="text"
            width={"100%"}
            onChange={setSubject1}
            required
          />
          <CommonInput
            label="Subject 2"
            value={subject2}
            type="text"
            width={"100%"}
            onChange={setSubject2}
            required
          />

          <Button className="mt-4" type="submit">
            Submit
          </Button>
         
        </Form>
        </Col>
        <Col>
        {isFormSubmitted && !showNotification && Object.keys(formErrors).length > 0 && (
            <Alert className="mt-4" style={{width:"100%"}} variant="danger">
              Please fill in the required fields:
              <ul>
                {Object.values(formErrors).map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </Alert>
          )}
          {
            isFormSubmitted && showNotification && (<Alert variant="success"> Saved Successfully</Alert>)
          }
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationForm;
