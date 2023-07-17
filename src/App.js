
import React, { useEffect } from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from "axios";
import DisplayUniveristy from "./Task4";
import UniList from "./Task4/UniList"

const Home = () => <h2>Welcome to the Home Page</h2>;
const About = () => <h2>About Us</h2>;

const App = () => {
    const [value, setValue] = useState([]);
    const [courses, setCourses] = useState([]);
  
    useEffect(() => {
      let something = ["Hello", "mic check"];
      setValue(something);
    }, []);
  
    useEffect(() => {
      fetchCourses();
      
    }, []);

    const fetchCourses = async () => {
      try {
        const response = await axios.get("/app-data/study-abroad/courses.json");
        let resp= response.data
        setCourses(resp);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };


     


    return (
  <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">All Tasks</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>

    <hr />

    <Routes>
   
      <Route path="/" element={<DisplayUniveristy data={courses} />} />
      <Route path="/universities/:Id" element={<UniList data={courses} />} />
    </Routes>

    <hr />


  </Router>
    );
};

export default App
