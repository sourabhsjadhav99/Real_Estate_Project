import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./DisplayData.css"
import { FiSearch, FiEdit2, FiEye, FiImage } from 'react-icons/fi';
function Table() {

    const [data, setData] = useState([]);
    const [searchApiData, setSearchApiData] = useState([]);
    const [filterVal, setFilterval] = useState("");
    let [status, setStatus] = useState("Unsold")
    let navigate = useNavigate()

    useEffect(() => {
        const fetchData = () => {
            fetch("/api/property")
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    setData(data);
                    setSearchApiData(data);
                });
        };
        fetchData();
    }, []);
    const handleFilter = (e) => {
        if (e.target.value === "") {
            setData(searchApiData);
        } else {
            const filterResult = searchApiData.filter((item) =>
                item.ppdId.toLowerCase().includes(e.target.value.toLowerCase())
            );
            setData(filterResult);
        }
        setFilterval(e.target.value);
    };
    let clickHandler = (e) => {
        setStatus("Sold")
    }
    let viewData = (id) => {
        navigate(`/view/:${id}`)

    }
    let editData = (id) => {
        // navigate("/form")

    }
    let deleteData=(id)=>{

    }
    return (
        <div className="container">
            <div className='table-header'>
                <div>
                    <div className='input-container'>
                        <input
                            className='input-boxs'
                            placeholder="Search PPD Id"
                            value={filterVal}
                            onInput={(e) => {
                                handleFilter(e);
                            }}
                        />
                        <FiSearch className='icon' />
                    </div>

                    {/* {filterVal.length > 0 ? data.map((data, index) => {
                        return <div key={index}>{data.ppdId}</div>;
                    }) : ""} */}
                </div>
                <button className='property-button'><Link to="/form" className='link'>+ Add Property</Link></button>
            </div>





            <table className="table" >
                <tr className="table-row">
                    <th>PPD ID</th>
                    <th>Image</th>
                    <th>Property</th>
                    <th>Contact</th>
                    <th>Area</th>
                    <th>Views</th>
                    <th>Status</th>
                    <th>Day Left</th>
                    <th>Action</th>
                </tr>
                {data.map((data, index) => {
                    return (
                        <tr key={index} className="table-row">
                            <td>{data.ppdId}</td>
                            <td><FiImage className='table-icons' /></td>
                            <td>{data.propertyType[0]}</td>
                            <td>{data.mobile}</td>
                            <td>{data.totalArea}</td>
                            <td>{parseInt(Math.random() * 50)}</td>
                            <td><button className='status-button' onClick={clickHandler}>{status}</button></td>
                            <td>{parseInt(Math.random() * 50)}</td>
                            <td>
                                <button className='action'  onClick={()=>{viewData(data.ppdId)}} ><FiEye className='table-icons' /></button>
                            <button className='action' onClick={()=>{editData(data._id)}}><FiEdit2 className='table-icons' /></button>
                            <button className='action' onClick={()=>{deleteData(data._id)}}>D</button>
                            </td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
}

export default Table
