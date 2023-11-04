import {React, useState} from "react";
import axios from "axios";

const backendUrl = "/api/input";

const Input = () => {
  const [formData, setFormData] = useState({
    data: "",
  });

  const handleInput = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    // Send the form data to the backend
    await axios.post(backendUrl, formData)
      .then((response) => {
        // Handle the successful response
        console.log(response);
      })
      .catch((err) => {
        // Handle the failed response
        console.log(err);
      });
  }; 

  return (
    <div>
      <h1>Input</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="data"
          onChange={handleInput}
          value={formData.data}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Input;