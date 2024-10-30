import React, { useEffect, useState } from 'react'
import { useTokenContext } from '../context/TokenContext';
import { Link, NavLink } from 'react-router-dom';
const AdminUsers = () => {
    const {authToken} = useTokenContext();
    console.log(authToken);
    const [user, setUser] = useState('');
    const getUserData = async () => {
        try {
            const res = await fetch('http://localhost:5000/api/admin/users',{ 
                    method: 'GET',  
                    headers: {
                    "Authorization": authToken}
                }
            )
            if(res.ok){
                const data = await res.json();
                setUser(data);
                console.log(data);
            }
        } catch (error) {
            console.log('cant get user data at admin');
        }
    }

    const deleteUser = async (id) => {
      const res = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`, {
        method: 'DELETE',
        headers: {
          "Authorization": authToken
        }
      })
      if(res.ok){
        const data = await res.json();
        console.log(`users after deletion ${data}`);
        getUserData();
      }
    }
    useEffect( () => {
        getUserData();
    }, []);
    return (
        <>
          <section className="admin-users-section">
            <div className="container">
              <h1>Admin Users Data </h1>
            </div>
            <div className="container  admin-users">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {user != '' && user.map((curUser, index) => {
                    return (
                      <tr key={index}>
                        <td>{curUser.username}</td>
                        <td>{curUser.email}</td>
                        <td>{curUser.phone}</td>
                        <td>
                          <Link to={`/admin/users/${curUser._id}/edit`}>Edit</Link>
                        </td>
                        <td>
                          <button
                            className="btn"
                            onClick={() => deleteUser(curUser._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        </>
      );
    };

export default AdminUsers
