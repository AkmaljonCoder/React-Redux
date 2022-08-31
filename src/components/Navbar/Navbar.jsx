import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Navbar = ({render,setrender}) => {

  const [data, setdata] = useState([])

  const selector = useSelector((state)=>{return state});
  
  useEffect(() => {
    setdata(selector.shop)
  }, [render])

  return (
    <div>{
        data.length === 0 ?
        <h1>nothing to see here</h1>
        :
        data.map((item,index)=>{
          return(
            <h1 key={index}>{item.title}</h1>
          )
        })
      }
    </div>
  )
}

export default Navbar