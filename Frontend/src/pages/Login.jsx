import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTokenContext} from '../context/TokenContext';
const Login = () => {
  const navigate = useNavigate();

  const {storeToken} = useTokenContext();

  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const handleInput = (e) => {
    // let value = 
    console.log(e);
    let value = e.target.value;
    let name = e.target.name;

    setUser({
      ...user,
      [name]: value,
    })
  }
  const handleSubmit =async (e) => {
    e.preventDefault();
    console.log(user);

    const response = await fetch(`http://localhost:5000/api/user/login` , {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user),
    })
    console.log("login", response);
    if(response.ok){
      const res_data =await response.json();
      console.log(res_data);
      storeToken(res_data.token);
      // alert('LOGIN SUCCESFULL')
      navigate('/')
    }
    else{
      alert('LOGIN NOT SUCCESFULL')
      console.log("Invalid Creds brotha");
    }
  }
  return (
    <>
      <section>
        <main>
          <div className='section-registration'>
            <div className='container grid grid-two-cols'>
              <div className='registration-image'>
                <img
                  src="/images/register.png" alt="Photo"
                  width='500' height='400'
                />
              </div>
              <div className='registration-form'>
                <h1 className='main-heading mb-3'>Login form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor='email'>Email :</label>
                    <input
                      type='text'
                      name='email'
                      placeholder='Enter email'
                      required
                      id='email'
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor='password'>Password :</label>
                    <input
                      type='password'
                      name='password'
                      placeholder='Enter password'
                      required
                      id='password'
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <br/>
                    <button type="submit" className="btn btn-submit">
                      Login
                    </button>     
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}

export default Login
