import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from "./components/Navbar";
import Registration from "./pages/Registration";
import Login from './pages/Login'
// import Logout from "./pages/Logout";
import Services from "./pages/Services";
import AdminLayout from "./layouts/AdminLayout";
import AdminUsers from "./pages/AdminUsers";
import AdminContacts from "./pages/AdminContacts";
import Logout from "./pages/Logout";
import AdminUpdate from "./pages/AdminUpdate";

const App = () =>{
  return(
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/about" element = {<About/>}/>
          <Route path = "/contact" element = {<Contact/>}/>
          <Route path = '/registration' element = {<Registration/>}/>
          <Route path = '/login' element = {<Login/>}/>
          <Route path = '/logout' element = {<Logout/>}/>
          <Route path = '/service' element = {<Services/>}/>
          <Route path="/admin" element = {<AdminLayout/>}>
            <Route path="users" element = {<AdminUsers/>}/>
            <Route path="contacts" element = {<AdminContacts/>}/>
            <Route path="users/:id/edit" element = {<AdminUpdate/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;