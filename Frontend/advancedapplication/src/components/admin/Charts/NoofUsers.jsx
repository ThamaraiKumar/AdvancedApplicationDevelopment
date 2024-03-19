import React from 'react'
import {
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
} from "recharts";
import './Chart.css'

function NoofUsers() {
    const data = [
        { name: "CYA", users: 400 },
        { name: "MYA", users: 700 },
        { name: "KYA", users: 200 },
        { name: "TYA", users: 1000 },
    ];

  return (
    <div className='barchart'>
    <BarChart width={500} height={400} data={data}>
            <Bar dataKey="users" fill="skyblue" />
            <CartesianGrid stroke="transparent" />
            <XAxis dataKey="name" />
            <YAxis />
        </BarChart>
        <div className='chart-desc'>No of Users till Now</div>
        
    </div>
  )
}

export default NoofUsers