import React from 'react'
import { Link} from 'react-router-dom'
import SideBar from '../../SideBar'
import "./DisplayData.css"

function DisplayData() {
  return (
    <div className="main-box">
      <SideBar />
      <div>
        <header className='header'> </header>
        <h1>Paste your displaycode here</h1>
        <Link to="/form"> Add Property</Link>

      </div>
    </div>
  )
}

export default DisplayData
