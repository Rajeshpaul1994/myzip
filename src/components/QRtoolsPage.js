import React, { useState, useRef } from 'react'
import myzipqr from '../images/myzip-qr-ico.png'
import { QRCodeCanvas } from "qrcode.react";
export default function QRtoolsPage() {
    const [url, setUrl] = useState("");
    const qrRef = useRef();
    const downloadQRCode = (e) => {
        e.preventDefault();
        //const canvas = qrRef.current.querySelector("qrCode");
        const canvas = document.getElementById('qrCode');
        let image = canvas.toDataURL("image/png");
        let anchor = document.createElement("a");
        anchor.href = image;
        anchor.download = `qr-code.png`;
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
        setUrl("");
    };

    const qrCodeEncoder = (e) => {
        setUrl(e.target.value);
    };

    const qrcode = (
        <QRCodeCanvas
        id="qrCode"
        value={url}
        size={300}
        bgColor={"#ffffff"}
        level={"H"}
        />
    );
  return (

    <div className='container'>
        
        <div className='row'>
            <div className='col-lg-7 mt-3'>
              <div className='space-100'></div>
              <p className='fs-2 bold ubuntu f-700 text-white text-center mt-5'>Paste your url and create live QR..</p>
              <div className='mt-3 text-center'>
                <input type='text' className='qr-input' value={url} onChange={qrCodeEncoder} placeholder='Paste your URL here..' />
              </div>
              <div className='mt-3 text-center'>
                <button type='submit' className='bg-warning mybtn-getstrted' onClick={downloadQRCode} disabled={!url} >DOWNLOAD QR</button>
              </div>
            </div>
            <div className='col-lg-5'>
                <div className='space-75'></div>
                <div className='qr-box'>{qrcode}</div>
            </div>
        </div>
    </div>
  )
}
