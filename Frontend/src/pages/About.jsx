import React from 'react'
import { useTokenContext } from '../context/TokenContext';
import { NavLink } from "react-router-dom";

export const About = () => {
  const {user} = useTokenContext();
  console.log(user);
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              {user ?
                <p>Hello {user.username}</p> : <p>Hello</p>
              }
              {/* <p>Hello {user.username}</p> */}
              <h1>Why Choose Us? </h1>
              <p>
                Expertise: Our team consists of experienced IT professionals who
                are passionate about staying up-to-date with the latest industry
                trends.
              </p>
              <p>
                Customization: We understand that every business is unique.
                Thats why we create solutions that are tailored to your specific
                needs and goals.
              </p>
              <p>
                Customer-Centric Approach: We prioritize your satisfaction and
                provide top-notch support to address your IT concerns.
              </p>
              <p>
                Affordability: We offer competitive pricing without compromising
                on the quality of our services.
              </p>
              <p>
                Reliability: Count on us to be there when you need us. We're
                committed to ensuring your IT environment is reliable and
                available 24/7.
              </p>
              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn secondary-btn"> Connect Now</button>
                </NavLink>
                <NavLink to="/services">
                  <button className="btn secondary-btn"> Learn More</button>
                </NavLink>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/about.png"
                alt="coding buddies "
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About
