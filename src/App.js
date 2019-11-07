import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const nasa_api =
  "https://api.nasa.gov/planetary/apod?api_key=ZGHKUkdfKsBpmBKsIgwMQCURhmc8Pz5bV9rTgufI";
function App() {
  const [pod, setPod] = useState({});

  useEffect(() => {
    axios
      .get(nasa_api)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
