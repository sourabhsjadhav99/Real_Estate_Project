import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

function TableWithSearch() {
  const [data, setData] = useState([]);
  const [searchApiData, setSearchApiData] = useState([]);
  const [filterVal, setFilterval] = useState("");
  useEffect(() => {
    const fetchData = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setSearchApiData(data);
        });
    };
    fetchData();
  }, []);
  const handleFilter = (e) => {
    if (e.target.value == "") {
      setData(searchApiData);
    } else {
      const filterResult = searchApiData.filter((item) =>
        item.email.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setData(filterResult);
    }
    setFilterval(e.target.value);
  };

  return (
    <div id="container">
      <div id="input">
      <input
        placeholder="Search"
        value={filterVal}
        onInput={(e) => {
          handleFilter(e);
        }}
      />
      </div>
      { filterVal.length >0 ? data.map((data, index) => {
        return <div key={index}>{data.email}</div>;
      }):""}

      <table className="table">
        <tr>
          <th>Sr.no</th>
          <th>Name</th>
          <th>User Name</th>
 
        </tr>
        {data.map((data, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.username}</td>
              
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default TableWithSearch;
