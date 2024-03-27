import React, { useState } from "react";
import user from "../classes/user";
import corona from '../classes/corona'
import axios from "axios";
import Vaccine from "../classes/vaccine";
import { useNavigate } from "react-router-dom";
const Add=()=>
{
    //@ts-ignore
    let [localUser, setLocalUser]=useState<user>({});
    //@ts-ignore
    let [localCorona, setLocalCorona]=useState<corona>({});
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

  const myFun=()=>{
    setLocalCorona({...localCorona, vaccine:  [vac1, vac2, vac3, vac4]})
    {alert("💉added💉")}
    }

    
    const x = ()=>
    {
       if(!isEdit)
       {
        axios.put('http://localhost:1234/user/add',localUser)
        .then(()=>alert("user added!"));
        axios.put('http://localhost:1234/corona/add', localCorona)
        .then()
       }
       else
       {
        axios.post(`/edit/${localUser._id}`)
       }
        myNavigate('/');
    }

 

    return <div>
        {/* user detailes */}
        <input type="text" placeholder="first name"
         onChange={(e) => setLocalUser({...localUser, fNmae:e.target.value })}>
        </input><br></br><br></br>
        <input type="text" placeholder="last name"
        onChange={(e) => setLocalUser({...localUser, lName:e.target.value })}>
        </input><br></br><br></br>
                <input 
        type="text" 
        placeholder="id"
        onChange={(e) => {
            setLocalUser({...localUser, id:e.target.value});
            setLocalCorona({...localCorona, userId:e.target.value});
        }}
        /><br></br><br></br>
        <input type="text" placeholder="city" 
        onChange={(e) => setLocalUser({...localUser, city:e.target.value })}>
        </input><br></br><br></br>
        <input type="text" placeholder="street" 
        onChange={(e) => setLocalUser({...localUser, street:e.target.value })}>
        </input><br></br><br></br>
        <input type="text" placeholder="birth date" 
        onChange={(e) => setLocalUser({...localUser, BirthDate:e.target.value })}>
        </input><br></br><br></br>
        <input type="text" placeholder="telephone" 
        onChange={(e) => setLocalUser({...localUser, Telephone:e.target.value })}>
        </input><br></br><br></br>
        <input type="text" placeholder="phone" 
        onChange={(e) => setLocalUser({...localUser, phone:e.target.value })}>
        </input><br></br><br></br>
        {/* vaccines detailes */}
        <h3>vaccines</h3>
        <h5>vaccine 1</h5>
        <input type="text" placeholder="date"
        //@ts-ignore
        onChange={(e)=> setVac1({...vac1, date:e.target.value})}>
        </input><br></br><br></br>
        <input type="text" placeholder="producer"
        //@ts-ignore
        onChange={(e)=> setVac1({...vac1,producer:e.target.value})} >
        </input><br></br><br></br>
        <h5>vaccine 2</h5>
        <input type="text" placeholder="date"
        //@ts-ignore
        onChange={(e)=> setVac2({...vac2, date:e.target.value})}>
        </input><br></br><br></br>
        <input type="text" placeholder="producer"
        //@ts-ignore
        onChange={(e)=> setVac2({...vac2,producer:e.target.value})} >
        </input><br></br><br></br>
        <h5>vaccine 3</h5>
        <input type="text" placeholder="date"
        //@ts-ignore
        onChange={(e)=> setVac3({...vac3, date:e.target.value})}>
        </input><br></br><br></br>
        <input type="text" placeholder="producer"
        //@ts-ignore
        onChange={(e)=> setVac3({...vac3,producer:e.target.value})} >
        </input><br></br><br></br>
        <h5>vaccine 4</h5>
        <input type="text" placeholder="date"
        //@ts-ignore
        onChange={(e)=> setVac4({...vac4, date:e.target.value})}>
        </input><br></br><br></br>
        <input type="text" placeholder="producer"
        //@ts-ignore
        onChange={(e)=> setVac4({...vac4,producer:e.target.value})} >
        </input><br></br><br></br>
        <button onClick={myFun}>add vaccines💉</button><br></br><br></br>
        
        {/* corona details */}
        <input type="text" placeholder="positive time"
        onChange={(e)=> setLocalCorona({...localCorona,positiveTime:e.target.value})}>
        </input><br></br><br></br>
        <input type="text" placeholder="recovering time"
        onChange={(e)=> setLocalCorona({...localCorona,recoveringTime:e.target.value})
        }>
        </input><br></br><br></br>
        <input type="submit" onClick={x} ></input>
    </div>
}
export default Add;