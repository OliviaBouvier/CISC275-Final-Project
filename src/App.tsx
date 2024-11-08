import React from 'react';
import './App.css';
import {Navbar } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import {Home} from "./pages/home";
import {BasicQuestions} from "./pages/basicQuestions";
import {DetailedQuestions} from "./pages/detailedQuestions";
import {NavBarElements} from "./components/NavBar/NavBarElements"

function App() {
  return (
    <div className="App">
      
      <Router>
            <Navbar />
              <NavBarElements />
            <Routes>
                <Route path="/starter-helpi/" element={
                  <>
                    <Home /> 
                  </>
                } />
                <Route
                    path="/basicQuestions"
                    element={<BasicQuestions />}
                />
                <Route
                    path="/detailedQuestions"
                    element={<DetailedQuestions />}
                />
            </Routes>
        </Router>
    </div>
  );
}

export default App;