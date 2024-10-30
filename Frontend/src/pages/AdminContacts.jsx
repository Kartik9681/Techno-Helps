import React, { useState } from 'react'
import { useTokenContext } from '../context/TokenContext'
import { useEffect } from 'react';
const AdminContacts = () => {
  const [user, setUser] = useState('');

  const { authToken } = useTokenContext();
  console.log(authToken);

  const getContacts = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/admin/contacts', {
        method: 'GET',
        headers: {
          "Authorization": authToken,
        }
      })

      if (res.ok) {
        const contacts = await res.json();
        setUser(contacts);
        console.log(contacts);
      }

    } catch (error) {
      console.log('cant get contact data');
    }
  }

  const deleteContact = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": authToken,
        }
      })
      if(res.ok){
        getContacts();
      }
    } catch (error) {
      console.log("Cant delete contact");
    }

  }
  useEffect(() => {
    getContacts();
  }, []);

  console.log("user datatatataatattatat", user);
  return (
    <>
      <section className="admin-contacts-section">
        <div className="container">
          <h1>Contact Data </h1>
        </div>
        <div className="container admin-contacts">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {user != '' && user.map((curElem, index) => {
                return (
                  <tr key={index}>
                    <td>{curElem.username}</td>
                    <td>{curElem.email}</td>
                    <td>{curElem.message}</td>
                    <td>
                      <button
                        className="btn"
                        onClick={() => deleteContact(curElem._id)}
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
  )
}

export default AdminContacts
