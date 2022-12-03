import React, { useEffect, useState } from 'react'
import "../MainPage.css"
function Header() {
  let [data, setData]=useState([])
//   useEffect(() => {
//     const fetchData = () => {
//         fetch("/api/login")
//             .then((response) => response.json())
//             .then((data) => {
//                 console.log(data)
//                 setData(data);
              
//             });
//     };
//     fetchData();
// }, []);
  return (
    <header className='header'>
        <div>PPDID</div>
        <div>{data.email}</div>
         </header>
  )
}

export default Header
