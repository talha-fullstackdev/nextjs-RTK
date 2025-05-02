"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const ShowEmployee = () => {
  const [data, setData] = useState([]);
  const employeeData = useSelector((data) => data.employees);
  console.log(data)
  const handleDelete = (id) => {
    const filterData = data.filter((item) => item.id !== id);
    setData(filterData);
    return alert(`deleted succesfully `)

  };
  useEffect(() => {
    setData(employeeData);
  }, [employeeData]);

  return (
    <div>
      <h2>
        {data.map((item, i) => (
          <div className="" key={i}>
            <h1>{item.name}</h1>
            <button onClick={() => handleDelete(item.id)}>delete</button>
          </div>
        ))}
      </h2>
    </div>
  );
};

export default ShowEmployee;
