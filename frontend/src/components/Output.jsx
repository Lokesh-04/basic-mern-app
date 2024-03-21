import { React, useState, useEffect } from "react";
import axios from "axios";

export default function Output() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://basic-mern-app-0yaj.onrender.com/")
    .then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Output</h1>

      <ul>
        {data.map((signleValue) => (
          <li key={signleValue.id}>{signleValue.data}</li>
        ))}
      </ul>

    </div>
  );
}
