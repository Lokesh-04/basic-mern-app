import { React, useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [h1Text, setH1Text] = useState("");

  useEffect(() => {
    axios.get("https://basic-mern-app-0yaj.onrender.com/").then((response) => {
      setH1Text(response.data.h1Text);
      console.log(h1Text);
    });
  }, []);

  return (
    <div>
      <h1>{h1Text}</h1>
      <a href="/input">
        <button>input</button>
      </a>
      <a href="/output">
        <button>output</button>
      </a>
    </div>
  );
};

export default Home;
