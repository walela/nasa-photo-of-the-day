import React, { useState, useEffect } from "react";
import axios from "axios";
import Photo from "./Photo";
import Explanation from "./Explanation";
import Footer from "./Footer";
import "./App.css";

const nasa_api =
  "https://api.nasa.gov/planetary/apod?api_key=ZGHKUkdfKsBpmBKsIgwMQCURhmc8Pz5bV9rTgufI";
function App() {
  const [pod, setPod] = useState({});

  /*
  res.data is an object that looks like:
  {
    copyright: "Austin Walela",
    date: <today's date>,
    title: <title of the image>
    explanation: <paragraph's of text explaining the image>,
    url: <link to jpeg>,
    hdurl: <link to hd version of the image> ,
    media_type: "image",
    service_version: "v1"
  }
  lamarseillaize93
  */
  useEffect(() => {
    axios
      .get(nasa_api)
      .then(res => {
        console.log(res.data);
        setPod(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);
  return (
    <div className="App">
      <Photo title={pod.title} url={pod.url} />
      <Explanation explanation={pod.explanation} />
      <Footer copyright={pod.copyright} />
    </div>
  );
}

export default App;
