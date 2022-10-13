import logo from './images/myzip-logo.png';
import './App.css';
import React ,{useState} from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import sadface from './images/sad-face-emoji.gif';
import Home from './components/Home';
function App() {

  return (
    <div  className="main">
      <div className='container'>
        <div className='row'>
          <div className='col-sm'>
            <img src={logo} className='zip-karo-logo' alt='myzip-logo' />
          </div>
          <div className='col-sm'></div>
          <div className='col-sm'></div>
          <div className='col-sm'></div>
        </div>
      </div>
      <Home />
    </div>
  );
}

export default App;
