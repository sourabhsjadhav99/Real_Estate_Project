import React from 'react'
import "./MainPage.css"
import { RiHome3Line } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { BsFillTagFill } from "react-icons/bs";
import { GrFormView, GrUpload, GrDownload } from "react-icons/gr";
import { Routes, Route } from "react-router-dom";
import Error from './componentss/Error';
import FormPage from './componentss/Multistep_Form/FormPage';
import DisplayData from './componentss/Searchbar_Table/DisplayData';
import SignIn from "./componentss/SignIn_SignUp/SignIn"
import SignUp from "./componentss/SignIn_SignUp/SignUp"
function MainPage() {
  return (
    <div className='main-container'>
      <aside className="aside">
        <h1 className='logo'>Logo</h1>
        <div className="sideoption property">
          <span className="home">
            <RiHome3Line />
          </span>
          <span className="navvalue">Property</span>
        </div>

        <div className="side-icon">
          <span>
            <IoIosNotifications />
          </span>
          <span className="navvalue">Assistant</span>
        </div>

        <div className="side-icon">
          <span className="colorgray">
            <GrDownload />
          </span>
          <span className="navvalue">Received Interest</span>
        </div>

        <div className="side-icon ">
          <span className="colorgray">
            <GrUpload />
          </span>
          <span className="navvalue">Sent Interest</span>
        </div>

        <div className="side-icon">
          <span>
            <GrFormView />
          </span>
          <span className="navvalue">Property View</span>
        </div>

        <div className="side-icon">
          <span>
            <BsFillTagFill />
          </span>
          <span className="navvalue">Traffic Plan</span>
        </div>
      </aside>
      <section>
        <header className='header'> </header>
        <main className='main'>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/display" element={<DisplayData />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
        </main>
      </section>

    </div>
  )
}

export default MainPage
