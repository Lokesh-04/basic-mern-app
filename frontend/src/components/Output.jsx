import { React, useState, useEffect } from "react";
import axios from "axios";

export default function Output() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/output")
    .then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Output</h1>

      <ul>
        {data.map((signleValue) => (
          <li key={signleValue.id}>{signleValue.value}</li>
        ))}
      </ul>

    </div>
  );
}
