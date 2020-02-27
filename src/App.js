import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import axios from "axios";
import Photo from "./Photo";
import DatePicker from "./DatePicker";
import Explanation from "./Explanation";
import Footer from "./Footer";
import "./App.css";

const nasa_api =
  "https://api.nasa.gov/planetary/apod?api_key=ZGHKUkdfKsBpmBKsIgwMQCURhmc8Pz5bV9rTgufI";
const today = new Date().toISOString().substr(0, 10);
function App() {
  const [pod, setPod] = useState({});
  const [date, setDate] = useState(today);

  const handleDateChange = e => {
    setDate(e.target.value);
  };
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
  */

  useEffect(() => {
    axios
      .get(`${nasa_api}&date=${date}`)
      .then(res => {
        console.log(res.data);
        setPod(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, [date]);

  return (
    <div className="App">
      {Object.entries(pod).length ? (
        <>
          <Photo title={pod.title} date={date} url={pod.url} />
          <DatePicker date={date} handleDateChange={handleDateChange} />
          <Explanation explanation={pod.explanation} />
          <Footer copyright={pod.copyright} />
        </>
      ) : (
        <ReactLoading
          className="spinner"
          type="spin"
          color="blue"
          height="10%"
          width="10%"
        />
      )}
    </div>
  );
}

export default App;
