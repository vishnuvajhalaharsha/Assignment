import React, { useEffect } from "react";
import { useState } from "react";
import  Button  from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  const [value, setValue] = useState([]);

  useEffect(() => {
    let something = ["Hello", "mic check"];
    setValue(something);
  }, []);
  return (
    <div>
       <Button variant="outline-primary">Primary</Button>{' '}
      {value.map((item) => {
        return <p>{item}</p>;
      })}
    </div>
  );
};

export default App;
