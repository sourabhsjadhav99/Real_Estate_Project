import React from 'react'
import { Link} from 'react-router-dom'
import SideBar from '../../SideBar'
import Header from '../Header'
import "./DisplayData.css"
import Table from './Table'

function DisplayData() {
  return (
    <div className="main-box">
      <SideBar />
      <div>
        <Header/>
        <Table/>
        
      </div>
    </div>
  )
}

export default DisplayData
