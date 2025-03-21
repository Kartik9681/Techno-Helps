import { NavLink } from "react-router-dom";
import "./Navbar.css";
import React from "react";
import { useTokenContext } from "../context/TokenContext";

export const Navbar = () => {
  const { isLoggedIn , loading, user} = useTokenContext();

  if(loading){
    return <h1>...Loading</h1>
  }
  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <NavLink to="/">ThapaTechnical</NavLink>
          </div>

          <nav>
            <ul>
              <li>
                <NavLink to="/"> Home </NavLink>
              </li>
              <li>
                <NavLink to="/about"> About </NavLink>
              </li>
              <li>
                <NavLink to="/service"> Services </NavLink>
              </li>
              <li>
                <NavLink to="/contact"> Contact </NavLink>
              </li>
              {isLoggedIn ? (
                <>
                  {/* {!user.isAdmin ? (
                    <></>
                  ): (
                    <li>
                      <NavLink to="/admin/users"> Admin </NavLink>
                    </li>
                  )} */}
                <li>
                  <NavLink to="/logout">Logout</NavLink>
                </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink to="/registration"> Register </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login"> Login </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;