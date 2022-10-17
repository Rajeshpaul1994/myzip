import React, {useState} from 'react'

export default function LoginPage() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-2 col-sm'></div>
            <div className='col-8 col-sm'>
                <div>
                    <div className='login-form-div'>
                        <div>
                            <p className='text-center fs-4 pt-5'>Sign Up Here</p>
                        </div>
                        <div className='text-center mb-3'>
                            <input type='text' name='fullname' placeholder='Your full name'  className='input-box'  />
                        </div>
                        <div className='text-center mb-3'>
                            <input type='text' name='username' placeholder='Your username'  className='input-box'  />
                        </div>
                        <div className='text-center mb-3'>
                            <input type='email' name='email' placeholder='Your e-mail'  className='input-box'  />
                        </div>
                        <div className='text-center mb-3'>
                            <input type='password' name='pass' placeholder='Your Password'  className='input-box'  />
                        </div>
                        <div className='text-center pb-3'>
                        <button type="button" class="btn btn-dark">Sign Up</button>

                        </div>
                    </div>
                </div>
            </div>
            <div className='col-2 col-sm'></div>
        </div>
    </div>
  )
}
