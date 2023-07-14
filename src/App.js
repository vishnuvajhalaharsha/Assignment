import React, { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState([]);

  useEffect(() => {
    let something = ["Hello", "mic check"];
    setValue(something);
  }, []);
  return (
    <div>
      {value.map((item) => {
        return <p>{item}</p>;
      })}
    </div>
  );
};

export default App;
