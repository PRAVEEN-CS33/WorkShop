import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Success from './components/success/Success';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Complaint from './components/complaints/Complaint';
import Signin from './components/success/Signin';
import Signup from './components/success/Signup';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/complaints" element={<Complaint/>}/>
          <Route exact path="/success" element={<Success/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/signin" element={<Signin/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
