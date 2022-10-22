import React from 'react'
import zipico from '../images/zip-icon-for-landing-page.png'
import {Routes, Route, useNavigate} from 'react-router-dom';
export default function LandingPage() {
  const navigate = useNavigate();
  const navigateToContacts = () => {
    navigate('/zip-tool');
  };
  return (
    <div className='container'>
        <div className='space-100'></div>
        <div className='row'>
            <div className='col-lg-4'>
                <img className='landing-page-ico' src={zipico} style={{'width':'400px'}}  />
            </div>
            <div className='col-lg-8 mt-3'>
              <p className='fs-2 bold ubuntu f-700 text-white text-center mt-5'>The free, fun and smart way to create zip<br/> online..</p>
              <div className='mt-3 text-center'>
                <button className='bg-white mybtn-getstrted' onClick={navigateToContacts}>GET STARTED</button>
              </div>
              <div className='mt-3 text-center'>
                <button className='bg-white mybtn-getstrted'>I ALREADY HAVE AN ACCOUNT</button>
              </div>
            </div>
        </div>
    </div>
  )
}
