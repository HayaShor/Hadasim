import React, { useState } from "react";
import user from "../classes/user";
import corona from '../classes/corona'
import axios from "axios";
import Vaccine from "../classes/vaccine";
import { useNavigate, useParams } from "react-router-dom";
//זה האדיט עשיתי את כל האינפוטים עם הוואליו איך אני עושה שזה יעבוד?
const Edit=()=>
{
    let myParams = useParams();
    let myId=myParams.id;
    let myListU:Array<user>;
    let myListC:Array<corona>;

    axios.get('http://localhost:1234/user/getAll')
    .then((data)=>{myListU=data.data});
    axios.get('http://localhost:1234/corona/getAll')
    //@ts-ignore
    let myUser:user=myList.filter(x=>x._id==myId)
    //תעודת זהות
    let userId=myUser.id;
    //@ts-ignore
    let myCorona:corona=myListC.filter(x=>{x.userId=userId})

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

    //התבלבלתי זה היה ניסיון קודם והעתקתי את הדף של האד
    //לא נראה לי שצריך את האיז אדיט גם כי אני בדף של אדיט לא?
    const x = ()=>
    {
       {
        axios.post(`/edit/${localUser._id}`)
       }
    }

 //תעשי בצד

    return <div>
        {/* user detailes */}
        <input type="text" placeholder="first name"
         onChange={(e) => setLocalUser({...localUser, fNmae:e.target.value })} value={String(myUser.fNmae)}>
        </input><br></br><br></br>
        <input type="text" placeholder="last name"
        onChange={(e) => setLocalUser({...localUser, lName:e.target.value })}  value={String(myUser.lName)}>
        </input><br></br><br></br>
        <input 
        type="text" 
        placeholder="id"
        onChange={(e) => {
            setLocalUser({...localUser, id:e.target.value});
            setLocalCorona({...localCorona, userId:e.target.value});
        }}
        value={String(myUser.id)}/><br></br><br></br>
        <input type="text" placeholder="city" 
        onChange={(e) => setLocalUser({...localUser, city:e.target.value })} value={String(myUser.city)}>
        </input><br></br><br></br>
        <input type="text" placeholder="street" 
        onChange={(e) => setLocalUser({...localUser, street:e.target.value })}  value={String(myUser.street)}>
        </input><br></br><br></br>
        <input type="text" placeholder="birth date" 
        onChange={(e) => setLocalUser({...localUser, BirthDate:e.target.value })}  value={String(myUser.BirthDate)}>
        </input><br></br><br></br>
        <input type="text" placeholder="telephone" 
        onChange={(e) => setLocalUser({...localUser, Telephone:e.target.value })}  value={String(myUser.Telephone)}>
        </input><br></br><br></br>
        <input type="text" placeholder="phone" 
        onChange={(e) => setLocalUser({...localUser, phone:e.target.value })}  value={String(myUser.phone)}>
        </input><br></br><br></br>
        {/* vaccines detailes */}
        <h3>vaccines</h3>
        <h5>vaccine 1</h5>
        <input type="text" placeholder="date"
        //@ts-ignore
        onChange={(e)=> setVac1({...vac1, date:e.target.value})}  value={String(myCorona.vaccine[0].date)}>
        </input><br></br><br></br>
        <input type="text" placeholder="producer"
        //@ts-ignore
        onChange={(e)=> setVac1({...vac1,producer:e.target.value})} value={String(myCorona.vaccine[0].producer)}>
        </input><br></br><br></br>
        <h5>vaccine 2</h5>
        <input type="text" placeholder="date"
        //@ts-ignore
        onChange={(e)=> setVac2({...vac2, date:e.target.value})} value={String(myCorona.vaccine[1].date)}>
        </input><br></br><br></br>
        <input type="text" placeholder="producer"
        //@ts-ignore
        onChange={(e)=> setVac2({...vac2,producer:e.target.value})} value={String(myCorona.vaccine[1].producer)}>
        </input><br></br><br></br>
        <h5>vaccine 3</h5>
        <input type="text" placeholder="date"
        //@ts-ignore
        onChange={(e)=> setVac3({...vac3, date:e.target.value})} value={String(myCorona.vaccine[2].date)}>
        </input><br></br><br></br>
        <input type="text" placeholder="producer"
        //@ts-ignore
        onChange={(e)=> setVac3({...vac3,producer:e.target.value})} value={String(myCorona.vaccine[2].producer)}>
        </input><br></br><br></br>
        <h5>vaccine 4</h5>
        <input type="text" placeholder="date"
        //@ts-ignore
        onChange={(e)=> setVac4({...vac4, date:e.target.value})} value={String(myCorona.vaccine[3].date)}>
        </input><br></br><br></br>
        <input type="text" placeholder="producer"
        //@ts-ignore
        onChange={(e)=> setVac4({...vac4,producer:e.target.value})} value={String(myCorona.vaccine[3].producer)}>
        </input><br></br><br></br>
        <button onClick={myFun}>add vaccines💉</button><br></br><br></br>
        
        {/* corona details */}
        <input type="text" placeholder="positive time"
        onChange={(e)=> setLocalCorona({...localCorona,positiveTime:e.target.value})} value={String(myCorona.positiveTime)}>
        </input><br></br><br></br>
        <input type="text" placeholder="recovering time"
        onChange={(e)=> setLocalCorona({...localCorona,recoveringTime:e.target.value})} value={String(myCorona.recoveringTime)}>
        </input><br></br><br></br>
        <input type="submit" onClick={x} ></input>
    </div>
}
export default Edit;