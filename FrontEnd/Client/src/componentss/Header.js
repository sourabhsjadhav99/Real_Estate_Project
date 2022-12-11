import React from 'react'
import { Link} from 'react-router-dom'
import "../MainPage.css"
import { FiLogOut } from 'react-icons/fi'


function Header() {
  let userid="sourabh@123.com  "
  return (
    <header className='header'>
      <div>{`PPD${1000+parseInt(Math.random()*1000)}`}</div> 

    <div><span>{userid}</span><abbr title="Logout"><Link to="/"><FiLogOut /></Link></abbr></div>
    </header>
  )
}

export default Header