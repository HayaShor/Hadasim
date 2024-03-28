import React, { useEffect, useState } from "react";
import user from "../classes/user";
import corona from '../classes/corona'
import axios from "axios";
import Vaccine from "../classes/vaccine";
import { useNavigate, useParams } from "react-router-dom";
const Edit=()=>
{
    let myParams = useParams();
    let myId=myParams?.id;

    const emptyUser=()=>
    {
        return  {   _id:"",
                 fNmae:"",
                 lName:"",
                 id:"",
                 city:"",
                 street:"",
                 BirthDate:"",
                 Telephone:"",
                 phone:"",}
        
    }

    const emptyCorona=()=>
    {
        return {
            _id:"",
            userId:"",
            vaccine:[],
            positiveTime:"",
            recoveringTime:""
        }
    }


const [myListU, setMyListU]=useState<Array<user>>([]);
const [myListC, setMyListC]=useState<Array<corona>>([]);
   
    
    //@ts-ignore
    const [localUser, setLocalUser]=useState<user>(emptyUser());
    const [userId, setUserId]=useState(localUser?.id)
    //@ts-ignore
    const [localCorona, setLocalCorona]=useState<corona>(emptyCorona());
    //@ts-ignore
    const [vac1, setVac1] = useState<Vaccine>({})
    //@ts-ignore
    const [vac2, setVac2] = useState<Vaccine>({})
    //@ts-ignore
    const [vac3, setVac3] = useState<Vaccine>({})
    //@ts-ignore
    const [vac4, setVac4] = useState<Vaccine>({})

    const[isEdit, setIdEdit]=useState(false);

    const myNavigate=useNavigate();
debugger
    useEffect(()=>
    {
        axios.get('http://localhost:1234/user/getAll')
        .then((data)=>{setMyListU(data.data)});
        axios.get('http://localhost:1234/corona/getAll')
        .then((data)=>{setMyListC(data.data)})
    }) 

    useEffect(()=>{
        let findUser=myListU?.filter(x=>x._id==myId);
        setLocalUser(findUser[0]?findUser[0]:emptyUser());
    }, [myListU])

    useEffect(()=>
    {
        let findCorona=myListC?.filter(x=>x.userId=localUser.id);
        debugger
        setLocalCorona(findCorona[0]?findCorona[0]:emptyCorona());
    }, [myListC, localUser])
  const myFun=()=>{
    setLocalCorona({...localCorona, vaccine:  [vac1, vac2, vac3, vac4]})
    {alert("💉added💉")}
    }

    const x = ()=>
    {
        axios.post(`http://localhost:1234/user/edit/${localUser?._id}`)
        .then(()=>alert("user edited"))
        axios.post(`http://localhost:1234/corona/edit/${localCorona?._id}`)
        .then(()=>alert("corona edited"))
    }

    debugger


    return <div>
        {/* user detailes */}
        <input type="text" placeholder="first name"
         onChange={(e) => setLocalUser({...localUser, fNmae:e.target.value })} value={String(localUser?.fNmae)}>
        </input><br></br><br></br>
        <input type="text" placeholder="last name"
        onChange={(e) => setLocalUser({...localUser, lName:e.target.value })}  value={String(localUser?.lName)}>
        </input><br></br><br></br>
        <input 
        type="text" 
        placeholder="id"
        onChange={(e) => {
            setLocalUser({...localUser, id:e.target.value});
            setLocalCorona({...localCorona, userId:e.target.value});
        }}
        value={String(localUser?.id)}/><br></br><br></br>
        <input type="text" placeholder="city" 
        onChange={(e) => setLocalUser({...localUser, city:e.target.value })} value={String(localUser?.city)}>
        </input><br></br><br></br>
        <input type="text" placeholder="street" 
        onChange={(e) => setLocalUser({...localUser, street:e.target.value })}  value={String(localUser?.street)}>
        </input><br></br><br></br>
        <input type="text" placeholder="birth date" 
        onChange={(e) => setLocalUser({...localUser, BirthDate:e.target.value })}  value={String(localUser?.BirthDate)}>
        </input><br></br><br></br>
        <input type="text" placeholder="telephone" 
        onChange={(e) => setLocalUser({...localUser, Telephone:e.target.value })}  value={String(localUser?.Telephone)}>
        </input><br></br><br></br>
        <input type="text" placeholder="phone" 
        onChange={(e) => setLocalUser({...localUser, phone:e.target.value })}  value={String(localUser?.phone)}>
        </input><br></br><br></br>
        {/* vaccines detailes */}
        <h3>vaccines</h3>
        <h5>vaccine 1</h5>
        <input type="text" placeholder="date"
        //@ts-ignore
        onChange={(e)=> setVac1({...vac1, date:e.target.value})}  value={String(localCorona?.vaccine?.[0]?.date)}>
        </input><br></br><br></br>
        <input type="text" placeholder="producer"
        //@ts-ignore
        onChange={(e)=> setVac1({...vac1,producer:e.target.value})} value={String(localCorona?.vaccine?.[0]?.producer)}>
        </input><br></br><br></br>
        <h5>vaccine 2</h5>
        <input type="text" placeholder="date"
        //@ts-ignore
        onChange={(e)=> setVac2({...vac2, date:e.target.value})} value={String(localCorona?.vaccine?.[1]?.date)}>
        </input><br></br><br></br>
        <input type="text" placeholder="producer"
        //@ts-ignore
        onChange={(e)=> setVac2({...vac2,producer:e.target.value})} value={String(localCorona?.vaccine?.[1]?.producer)}>
        </input><br></br><br></br>
        <h5>vaccine 3</h5>
        <input type="text" placeholder="date"
        //@ts-ignore
        onChange={(e)=> setVac3({...vac3, date:e.target.value})} value={String(localCorona?.vaccine?.[2]?.date)}>
        </input><br></br><br></br>
        <input type="text" placeholder="producer"
        //@ts-ignore
        onChange={(e)=> setVac3({...vac3,producer:e.target.value})} value={String(localCorona?.vaccine?.[2]?.producer)}>
        </input><br></br><br></br>
        <h5>vaccine 4</h5>
        <input type="text" placeholder="date"
        //@ts-ignore
        onChange={(e)=> setVac4({...vac4, date:e.target.value})} value={String(localCorona?.vaccine?.[3]?.date)}>
        </input><br></br><br></br>
        <input type="text" placeholder="producer"
        //@ts-ignore
        onChange={(e)=> setVac4({...vac4,producer:e.target.value})} value={String(localCorona?.vaccine?.[3]?.producer)}>
        </input><br></br><br></br>
        <button onClick={myFun}>add vaccines💉</button><br></br><br></br>
        
        {/* corona details */}
        <input type="text" placeholder="positive time"
        onChange={(e)=> setLocalCorona({...localCorona,positiveTime:e.target.value})} value={String(localCorona?.positiveTime)}>
        </input><br></br><br></br>
        <input type="text" placeholder="recovering time"
        onChange={(e)=> setLocalCorona({...localCorona,recoveringTime:e.target.value})} value={String(localCorona?.recoveringTime)}>
        </input><br></br><br></br>
        <input type="submit" onClick={x} ></input>
    </div>
}
export default Edit;