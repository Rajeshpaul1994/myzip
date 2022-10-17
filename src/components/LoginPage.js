import React, {useState} from 'react'

export default function LoginPage() {
    const [loginSignup, setloginSignup] = useState(false);
    const createAc = () =>{setloginSignup(true);}
    const loginNow = () =>{setloginSignup(false);}
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-2 col-sm'></div>
            <div className='col-8 col-sm'>
                <div className={loginSignup ? null: 'd-none'}>
                    <div className='login-form-div'>
                        <div>
                            <p className='text-center fs-4 pt-3'>Create Account</p>
                        </div>
                        <div className='text-center mb-3'>
                            <input type='text' name='username' placeholder='Your username..'  className='input-box'  />
                        </div>
                        <div className='text-center mb-3'>
                            <input type='email' name='email' placeholder='Your e-mail..'  className='input-box'  />
                        </div>
                        <div className='text-center mb-3'>
                            <input type='password' name='pass' placeholder='Your password..'  className='input-box'  />
                        </div>
                        <div className='text-center mb-3'>
                            <input type='password' name='pass' placeholder='Confirm password..'  className='input-box'  />
                        </div>
                        <div className='text-center mb-3'>
                        <button type="button" class="btn btn-dark pe-5 ps-5">Sign Up</button>

                        </div>
                        <div className='mb-3'>
                            <p className='text-center'>You already have an account..<a href='#' onClick={loginNow} className='link-to-login'> Sign In</a></p>
                        </div>
                    </div>
                </div>
                <div className={loginSignup ? 'd-none': null}>
                <div className='login-form-div'>
                        <div>
                            <p className='text-center fs-4 pt-3'>Sign In Here</p>
                        </div>
                        <div className='text-center mb-3'>
                            <input type='email' name='email' placeholder='Your e-mail..'  className='input-box'  />
                        </div>
                        <div className='text-center mb-3'>
                            <input type='password' name='pass' placeholder='Your password..'  className='input-box'  />
                        </div>
                        <div className='text-center mb-3'>
                        <button type="button" class="btn btn-dark pe-5 ps-5">Sign In</button>

                        </div>
                        <div className='mb-3'>
                            <p className='text-center'>You are a new user?..<a href='#' className='link-to-login' onClick={createAc}> Create Account</a></p>
                        </div>
                    </div> 
                </div>
            </div>
            <div className='col-2 col-sm'></div>
        </div>
    </div>
  )
}
