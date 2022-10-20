import React from 'react'
import zipico from '../images/zip-icon-for-landing-page.png'
export default function LandingPage() {
  return (
    <div className='container'>
        <div className='space-100'></div>
        <div className='row'>
            <div className='col-lg-4'>
                <img src={zipico} style={{'width':'400px'}}  />
            </div>
            <div className='col-lg-8'></div>
        </div>
    </div>
  )
}
