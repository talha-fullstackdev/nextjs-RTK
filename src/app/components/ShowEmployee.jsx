"use client"
import React from 'react'
import { useSelector } from 'react-redux'
const ShowEmployee = () => {
    const employeeData = useSelector((data)=>data.employees)

  return (
    <div>
        <h2>{employeeData.map((item,i)=>(
            <div className="" key={i}>
                <h1>{item.name}</h1>
            </div>
        ))}</h2>

    </div>
  )
}

export default ShowEmployee
///////