import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Navbar = ({render,setrender}) => {

  const [data, setdata] = useState([])

  const selector = useSelector((state)=>{return state});
  
  useEffect(() => {
    setdata(selector.shop)
  }, [render])

  return (
    <div className='maindiv'>
      <h1>Products</h1>
      {
        data.length === 0 ?
        <h1>nothing to see here</h1>
        :
        data.map((item,index)=>{
          return(
            <h1 className='text' key={index}>{`${index+1} - ${item.title}`}</h1>
          )
        })
      }
    </div>
  )
}

export default Navbar