import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useTokenContext } from '../context/TokenContext';  

const Registration = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    })

    const {storeToken} = useTokenContext();
    const handleInput = (e) =>{
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        })
    }

    const handleForm = async (e) =>{
        e.preventDefault();
        console.log(user);

        const response = await fetch(`http://localhost:5000/api/user/reg` , {
            method: 'POST',
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(user),
        })

        console.log(response);

        if(response.ok){
            const res_data =await response.json();
            console.log(res_data);
            storeToken(res_data.token);
            
            setUser({
                username: "",
                email: "",
                phone: "",
                password: "",
            });
            navigate('/login');
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
                            src = "/images/register.png" alt = "Photo" 
                            width='500' height='400'
                        />
                    </div>
                    <div className='registration-form'>
                        <h1 className='main-heading mb-3'>Registration form</h1>
                        <br/>
                        
                        <form onSubmit={handleForm}>
                            <div>
                                <label htmlFor="username">Username :</label>
                                <input 
                                    type = "text" 
                                    name = "username"
                                    placeholder='Enter the username'
                                    required
                                    id = 'username'
                                    autoComplete='off'
                                    value={user.username}
                                    onChange={handleInput}
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Email :</label>
                                <input 
                                    type = "text" 
                                    name = "email"
                                    placeholder='enter the email'
                                    required
                                    id = 'email'
                                    autoComplete='off'
                                    value={user.email}
                                    onChange={handleInput}
                                />
                            </div>
                            <div>
                                <label htmlFor="phone">Phone :</label>
                                <input 
                                    type = "text" 
                                    name = "phone"
                                    placeholder='enter the phone'
                                    required
                                    id = 'phone'
                                    autoComplete='off'
                                    value={user.phone}
                                    onChange={handleInput}
                                />
                            </div>
                            <div>
                                <label htmlFor="password">Password :</label>
                                <input 
                                    type = "password" 
                                    name = "password"
                                    placeholder='enter the password'
                                    id = 'password'
                                    required
                                    autoComplete='off'
                                    value={user.password}
                                    onChange={handleInput}
                                />
                            </div>
                            <br/>
                            <button type="submit" className="btn btn-submit">
                                Register Now
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

export default Registration;
