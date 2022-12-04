import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function View() {
  let {id}=useParams()
  let [data, setData] = useState([])
  useEffect(() => {
    const fetchData = () => {
      fetch(`/api/property/:${id}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setData(data);
        });
    };
    fetchData();
  }, []);
  return (
    <div>
      Negotable: {data.negotable}
      address: {data.address}
      area: {data.area}
      areaUnit: {data.areaUnit}
      attached: {data.attached}
      bankLoan: {data.bankLoan}
      bredth: {data.breadth}
      carParking: {data.carParking}
      city: {data.city}
      electricity: {data.electricity}
      email: {data.email}
      facing: {data.facing}
      featuredPackage: {data.featurePackage}
      furnished: {data.furnished}
      landmark: {data.landmark}
      lattitude: {data.lattitude}
      length: {data.length}
      lift: {data.lift}
      longitude: {data.longitude}
      mobile: {data.mobile}
      name: {data.name}
      noOfBhk: {data.noOfBhk}
      noOfFloor: {data.noOfFloor}
      ownership: {data.ownership}
      pincode: {data}
      postedBy: {data}
      ppdId: {data.ppdId}
      ppdPackage: {data.ppdPackage}
      price: {data.price}
      propertyAge: {data.propertyAge}
      propertyApproved: {data.propertyApproved}
      propertyType: {data.propertyType}
      properyDescription: {data.properyDescription}
      saleType: {data.saleType}
      totalArea: {data.totalArea}
      westernToilet: {data.westernToilet}

    </div>
  )
}

export default View

