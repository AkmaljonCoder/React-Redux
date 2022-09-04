import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'

const Users = ({render}) => {

  const [data, setdata] = useState([])

  const selector = useSelector((state)=>{return state});

  useEffect(() => {
    setdata(selector.users)
  }, [render])

  return (
    <div>
        <h1 className='usertitle'>Users</h1>
        <div className='userdiv'>
        {
          data.length === 0 ?
          <h1>nothing to see here</h1>
          :
          data.map((item,index)=>{
            return(
              <ul key={index+1}>
                <h1>user {index+1}</h1>
                <li>{`${item.name.firstname} ${item.name.lastname}`}</li>
                <li>username: {item.username}</li>
                <li>@{item.email}</li>
                <li>phone: {item.phone}</li>
              </ul>
            )
          })
        }
        </div>
    </div>
  )
}

export default Users