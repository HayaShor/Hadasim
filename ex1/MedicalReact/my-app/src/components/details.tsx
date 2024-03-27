import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const Details=()=>
{
    let myParams=useParams();
    let id=myParams.id;

const[item, setItem]=useState<any>()

    useEffect(()=>
   {
      axios.get(`http://localhost:1234/corona/getDet/${id}`)
     .then((d)=>{ if (item == null)
            setItem(d.data[0])})

   }, [])


    return <div>

<h3>corona data</h3>
    <table className="table table-bordered">
        <thead>
            <tr>
                <th>user id</th>
                <th>vaccine date</th>
                <th>vaccine producer</th>
                <th>positive Time</th>
                <th>recovering Time</th>
            </tr>
        </thead>
        <tbody>
<td>{item?.userId}</td>
<td>{item?.vaccine.map((k:any)=>(<p>{k.date}</p>))}</td>
<td>{item?.vaccine.map((k:any)=>(<p>{k.producer}</p>))}</td>
<td>{item?.positiveTime}</td>
<td>{item?.recoveringTime}</td>
</tbody>
</table></div>
}
export default Details