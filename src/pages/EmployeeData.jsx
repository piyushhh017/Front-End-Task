import React from 'react'
import { useParams } from 'react-router-dom'
import Employees from '../Employees/Employees'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../css/employee.css'

const EmployeeData = () => {

    useEffect(()=>{
        Aos.init({duration:2000});
      },[])

    const {id,name} = useParams()
    const Employee = Employees.filter((item)=>item.id === parseInt(id))

    const EmployeeDetail = Employee[0]

  return (
    <div className='mainDiv'>
      <div className="img">
        <img src={EmployeeDetail.photo} alt={EmployeeDetail.photo} data-aos='fade-right'/>
      </div>
      <div className="des" data-aos='fade-left'>
        <h1>{EmployeeDetail.name}</h1>
        <h3>{EmployeeDetail.email}</h3>
        <h4>{EmployeeDetail.role}</h4>
        <p>{EmployeeDetail.jobDescription}</p>
        <b>Address:</b>{EmployeeDetail.address.city} <br /> {EmployeeDetail.address.street}

        <iframe src={EmployeeDetail.address.src} allowFullscreen=""  loading="lazy"  referrerPolicy="no-referrer-when-downgrade" className='map'></iframe>

      </div>
    </div>
  )
}

export default EmployeeData
