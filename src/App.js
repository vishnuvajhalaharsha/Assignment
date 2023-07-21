import React, { useEffect } from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import DisplayUniveristy from "./Task4";
import UniList from "./Task4/UniList";
import SQL from "./Task1";
import StudentComponent from "./Task2";
import RegistrationForm from "./Task3";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";
import ScrollToTop from "./common/ScrollTop";

const App = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();

  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get("/app-data/study-abroad/courses.json");
      let resp = response.data;
      setCourses(resp);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  

  return (
    <Router>
        <ScrollToTop/>
    <div className="sticky-header">
     <Navbar  bg="primary" data-bs-theme="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Univeristy of Liverpool</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              {" "}
              Task 1
            </Link>
            <Link to="/task2" className="nav-link">
              Task 2
            </Link>
            <Link to="/task3" className="nav-link">
              Task 3
            </Link>
            <Link to="/task4" className="nav-link">
              Task 4
            </Link>
          </Nav>
        </Container>
      </Navbar>
      </div>


      <Routes>
        <Route path="/" element={<SQL />} />
        <Route path="/task2" element={<StudentComponent />} />
        <Route path="/task3" element={<RegistrationForm />} />
        <Route path="/task4" element={<DisplayUniveristy data={courses} />} />
        <Route path="/universities/:Id" element={<UniList data={courses} />} />
      </Routes>

      <hr />
    </Router>
  );
};

export default App;
