import React, { useEffect, useState } from "react";
// import BootstrapTable from "react-bootstrap-table-next";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css'

function DisplayDataProperty() {
    const [userList, setUserList] = useState([]);
    const [searchApiData, setSearchApiData] = useState([]);
    const [filterValue, setFilterValue] = useState('');
    useEffect(() => {
        const fetchData = () => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(json => {
                    setUserList(json)
                    setSearchApiData(json)
                })
        }
        fetchData();
    }, [])
    const handleFilter = (e) => {
        if(e.target.value === ''){
            setUserList(searchApiData);
        }
        else{
            const filterResult = searchApiData.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
            if(filterResult.length > 0){
                setUserList(filterResult)
            }
            else{
                //setUserList([{name : "No Data"}])
                setUserList(null)
            }
            setUserList(filterResult)
        }
        setFilterValue(e.target.value)
    }
    return (
        <div style={{ margin: "20px 20%" }}>
            {/* <BootstrapTable keyField='id' columns={columns} data={userList}/> */}
            <div className="p-input-icon-right">
                <input type="search" placeholder="Search by Id" value={filterValue} onChange={(e) => handleFilter(e)} />
            </div>
            <table>
                <th>Id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                {
                    userList.map(user => {
                        return (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default DisplayDataProperty;