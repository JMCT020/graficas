
import React from 'react';
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import Login from "./pages/login";
import Register from "./pages/register";


function App() {


  return (
    <div className="App">
      <Router>
      <Routes>
          <Route path="/" exact element={<Login/>} />
          <Route path="/register" exact element={<Register />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
