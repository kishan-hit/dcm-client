import React from "react"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import Queries from "./pages/Queries";
import Careers from "./pages/Careers";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<SignupPage />} ></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/queries' element={<Queries />}></Route>
          <Route path='/careers' element={<Careers />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
