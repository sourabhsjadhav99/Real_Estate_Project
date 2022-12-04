import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../MainPage.css"
import { FiLogOut } from 'react-icons/fi'
function Header() {
  let [userId, setUserId] = useState()
  let [ppdId, setPpdId] = useState()
  useEffect(() => {
    const fetchData = () => {
      fetch("/api/signup")
        .then((response) => response.json())
        .then(function (response) {
          console.log(response)
          setUserId(response.email)
          setPpdId(response.ppdId)
        })
        .catch((error) => {
          console.error('Error:', error);
        });;
    };
    fetchData();
  }, []);




  return (
    <header className='header'>
      <div>{ppdId}</div>
      <div><span>{userId}</span><Link to="/"><FiLogOut /></Link></div>
    </header>
  )
}

export default Header