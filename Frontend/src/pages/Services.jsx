import React, { useEffect, useState } from 'react'
const Services = () => {

  const [service, setService] = useState("");
  const getData = async () => {
    const res = await fetch('http://localhost:5000/api/services/service', {
      method: 'GET',
    })
    if (res.ok) {
      const data = await res.json();
      console.log(data.msg);
      setService(data.msg);
      console.log(typeof (data));
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className=" section-services container grid grid-three-cols">

      {service != "" && service.map((curElem, index) => {

        return (

          <div className="card" key={index}>

            <div className="card-img ">

              <img src="/images/design.png" alt="desginer" width="2" />

            </div>

            <div className="card-details">

              <div className="grid grid-two-cols">

                <p>{curElem.provider}</p>

                <p>{curElem.price}</p>

              </div>

              <h2>{curElem.service}</h2>

              <p>{curElem.description}</p>

            </div>

          </div>

        );

      })}

    </div>
  )
}

export default Services;
