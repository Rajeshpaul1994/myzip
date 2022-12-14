import React, {useState} from 'react'
import zipico from '../images/zip-icon-for-landing-page.png';
import axios from 'axios';

export default function ContactPage() {

  
  const [sendername , setName] = useState('');
  const [senderemail, setEmail] = useState('');
  const [sendermsg, setMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(false);

  const HandleChangeName = event =>{setName(event.target.value);}
  const HandleChangeEmail = event =>{setEmail(event.target.value);}
  const HandleChangeMsg = event =>{setMsg(event.target.value);}
  const SendMsg = (e) =>{
    e.preventDefault();
    setButtonDisable(true);
    if(sendername !='' && senderemail !='' && sendermsg !=''){
      const formData = new FormData();
      formData.append('name', sendername);
      formData.append('email', senderemail);
      formData.append('msg', sendermsg);
      const requestOptions = {
        method: 'POST',
        //headers: { 'Content-Type': 'application/json'},
        body: formData //JSON.stringify({ name: sendername, email:senderemail, msg:sendermsg })
        };
        fetch('https://apis.myzip.in/send-contact-form/', requestOptions)
            .then(response => response.json())
            .then(data => HandleAfterSubmit());
        
    }else{
      alert('Please fill the form first!');
    }
  }
  const HandleAfterSubmit = () =>{
    console.log('nnnnnnnnnn');
    setButtonDisable(false);
    setSuccessMsg(true);
    setEmail('');
    setMsg('');
    setName('');
  } 
  return (
    <div>
      <div className='container'>
        
        <div className='row'>
            <div className='col-lg-4'>
            <div className='space-100'></div>
                <img className='landing-page-ico' src={zipico} style={{'width':'400px'}}  />
            </div>
            <div className='col-lg-8'>
              <div className='space-75'></div>
              <p className='fs-2 bold ubuntu f-700 text-white text-center mt-5'>Feel free to connect..</p>
              <div className='mt-3 text-center'>
                <form>
                <div>
                  <input type='text' className='myzip-ip-box mb-3' onChange={HandleChangeName} value={sendername} placeholder='Your Name' required />
                </div>
                <div>
                  <input type='text' className='myzip-ip-box mb-3' onChange={HandleChangeEmail} value={senderemail} placeholder='Your Email ID' required />
                </div>
                <div>
                  <textarea className='myzip-textarea mb-3' onChange={HandleChangeMsg} placeholder='Your Message' value={sendermsg}  required></textarea>
                </div>
                
                <button className='bg-warning myzip-send-messege' disabled={buttonDisable} type='submit' onClick={SendMsg}>Send Message 
                  &nbsp;<span className={buttonDisable? null : 'd-none'}><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span></span>
                </button>
                <div className={successMsg ? null : 'd-none'}>
                  <div className='text-center mt-3'>
                    <span className='success-field pe-5 ps-5 text-white'>
                      Message successfully sent...
                    </span>
                  </div>
                </div>
                
                
                </form>
              </div>
              <div className='mt-5 text-center'>
                <div>
                  <p className='text-white'>Connect</p>
                  <a className='text-white me-3' href='https://github.com/Rajeshpaul1994'><i className="bi bi-github fs-3"></i></a>
                  <a className='text-white me-3' href='https://www.linkedin.com/in/rajesh-kumar-paul-python-developer/'><i className="bi bi-linkedin fs-3"></i></a>
                  <a className='text-white me-3' href='https://twitter.com/rajesh_myzip'><i className="bi bi-twitter fs-3"></i></a>
                </div>
              </div>

            </div>
        </div>
    </div>
    </div>
  )
}
