import {React,useState} from "react";
import {BrowserRouter as Router,Route,Routes,BrowserRouter,Link} from "react-router-dom";
import Home from "./components/Home";
import Input from "./components/Input";
import Output from "./components/Output";

const App = () => {
  return (
    <div>
      <Router>
      <Link to="/" style={{margin: '10px' }}>Home</Link>
      <Link to="/input" style={{margin: '10px' }}>Input</Link>
      <Link to="/output" style={{margin: '10px' }}>Output</Link>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/input" element={<Input/>} />
        <Route path="/output" element={<Output/>} />
      </Routes>
      </Router>
    </div>
  );
};

export default App;