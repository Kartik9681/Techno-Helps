import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useTokenContext } from '../context/TokenContext';
const AdminUpdate = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        phone: "",
    })
    const params = useParams(); 
    console.log(params);    

    const {authToken} = useTokenContext();
    const handleInput = async (e) => {
      let name = e.target.name;
      let value = e.target.value;

      setData({
        ...data,
        [name]:  value
    })
    }

    const singleUserData = async () => {
        try {
            const res = await fetch(`http://localhost:5000/api/admin/users/${params.id}`,{ 
                    method: 'GET',  
                    headers: {
                    "Authorization": authToken}
                }
            )
            if(res.ok){
                const userData = await res.json();
                setData(userData);
                console.log(userData);
            }
        } catch (error) {
            console.log('error in single user data');
        }
    }

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const res = await fetch(`http://localhost:5000/api/admin/users/update/${params.id}`, {
          method: 'PATCH',
          headers: {
            "Content-Type": "application/json",
            "Authorization": authToken,
          },
          body: JSON.stringify(data),
        },
      );
      if(res.ok){
        alert('Updated succ')
      }else{
        alert('NOT UPDAted')
      }
      } catch (error) {
        console.log('cant update');
      }
    }
    useEffect(() => {
        singleUserData();
    }, [])
    return (
        <>
          <section className="section-contact grid grid-two-cols">
            <div className="contact-content container">
              <h1 className="main-heading-update">Update Data</h1>
            </div>    
              {/* contact form content actual  */}
              <section className="section-form">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username :</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="off"
                      value={data.username}
                      onChange={handleInput}
                      required
                    />
                  </div>
    
                  <div>
                    <label htmlFor="email">email :</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="off"
                      value={data.email}
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">Phone :</label>
                    <input
                      type="phone"
                      name="phone"
                      id="phone"
                      autoComplete="off"
                      value={data.phone}
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <div>
                    <button type="submit">update</button>
                  </div>
                </form>
              </section>
          </section>
        </>
      );
}

export default AdminUpdate
