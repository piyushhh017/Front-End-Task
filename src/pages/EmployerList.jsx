import React, { useState } from 'react'
import Employees from '../Employees/Employees'
import { Link, data } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import '../css/employ.css'

const EmployerList = () => {

    useEffect(()=>{
        Aos.init({duration:2000});
      },[])

      const [search,setSearch] = useState('')

  return (
    <>
    <form className='form'>
        <input type="text" placeholder='Search here' value={search} onChange={(e)=>setSearch(e.target.value)} className='input'/>
    </form>
    <div className='cardSec'>
        {Employees.filter((data)=>{
            return search === '' ? data : (data.name.toLowerCase().includes(search.toLocaleLowerCase()) || data.role.toLowerCase().includes(search.toLocaleLowerCase()))
        }).map((v,i)=>{
            return(
                <div className="employCard" key={i} data-aos='fade-left'>
                    <img src={v.photo} alt={v.photo} />
                    <h3>{v.name}</h3>
                    <p>{v.role}</p>
                    <button className='viewBtn'><Link className='link' to={`/employee/${v.id}/${v.name}`}>View Employee</Link></button>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default EmployerList
