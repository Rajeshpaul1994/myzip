import logo from './images/myzip-logo.png';
import './App.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import React ,{useState} from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import sadface from './images/sad-face-emoji.gif';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import ContactPage from './components/ContactPage';
import LandingPage from './components/LandingPage';
import QRtoolsPage from './components/QRtoolsPage';

function App() {

  return (
    <Router>
    <div  className="main">
      <div className='navbar-myzip'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm col-lg-4'>
            <img src={logo} className='zip-karo-logo' alt='myzip-logo' />
          </div>
          <div className='col-sm col-lg-8'>
            <ul className="nav justify-content-end mt-3">
            <li className='nav-item'>
                <Link className='nav-link text-white fs-5' to="/">Home</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link text-white fs-5' to="/zip-tool">Zip Tool</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link text-white fs-5' to="/qr-tool">QR Tool</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link text-white fs-5' to="/contact">Contact Us</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link text-white fs-5 login-btn-nav d-none' to="/login">Login</Link>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
      </div>
      <Routes>
      <Route exact path='/' element={< LandingPage />}></Route>
        <Route exact path='/zip-tool' element={< Home />}></Route>
        <Route exact path='/qr-tool' element={< QRtoolsPage />}></Route>
        <Route exact path='/contact' element={< ContactPage />}></Route>
        <Route exact path='/login' element={< LoginPage />}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
