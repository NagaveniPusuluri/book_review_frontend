import React from 'react';
import Login from './Login'
import Home from './Home';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AuthProvider } from './assets/Contexts/authContext';
import Signup from './Signup';
import AppCSS from './App.module.css';
import { BookContextProvider } from './assets/Contexts/bookContext';
import BookDetails from './BookDetails';
import Nav from "./Nav"

function App() {

  return (
    <>
      <AuthProvider>
        <BookContextProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Nav>
                <div className={AppCSS.applinks}>
                  <Link to={'/login'} className={AppCSS.links}>Login</Link>
                  <Link to={'/signup'} className={AppCSS.links}>Signup</Link>
                </div>
              </Nav>} />
              <Route path="/login" element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path="/home" element={<Home />} />
              <Route path='/book-details' element={<BookDetails />} />
            </Routes>
          </Router>
        </BookContextProvider>
      </AuthProvider>
    </>
  )
}

export default App
