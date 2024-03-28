import axios from "axios"
import React, { useEffect, useReducer, useState } from "react"
import { Link } from "react-router-dom"
import  user  from '../classes/user'
const Users=()=>
{
    //@ts-ignore
    const[list, setList]=useState<Array<user>>([]);

    const deletion=(_id, id)=>
    {
      debugger
      axios.delete(`http://localhost:1234/corona/del/${id}`)
      .then((d)=> alert("corona data deleted"));
      axios.delete(`http://localhost:1234/user/del/${_id}`)
      .then(()=>alert("user deleted"))

    }

    useEffect(()=>{
     
        axios.get('http://localhost:1234/user/getAll')
        .then((data)=>{setList(data.data)})
    })
    return <div>
    <table className= "table table-bordered">
    <thead>
      <tr> 
        <th>first-Name</th>
        <th>Last-name</th>
        <th>id</th>
        <th>city</th>
        <th>street</th>
        <th>Birth-Date</th>
        <th>Telephone</th>
        <th>phone</th>    
      </tr>
    </thead>
    <tbody>
        {list?.map((l?:user)=>
        (
        <tr /*id={l?._id}*/>
        <td>{l?.fNmae}</td>
        <td>{l?.lName}</td>
        <td>{l?.id}</td>
        <td>{l?.city}</td>
        <td>{l?.street}</td>
        <td>{l?.BirthDate}</td>
        <td>{l?.Telephone}</td>
        <td>{l?.phone}</td>
        <td><Link to={`/edit/${l?._id}`}>edit</Link></td>
        <td><Link to={`/getDet/${l?.id}`}>details</Link></td>
        <td><button className="btn" onClick={()=>deletion(l?._id, l?.id)}>delete</button></td>
        </tr>
        ))}
    </tbody>
    </table>   
    </div>
}
export default Users