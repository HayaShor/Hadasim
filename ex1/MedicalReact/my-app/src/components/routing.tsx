import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Users from './users.tsx'
import Add from './addUser.tsx'
import Nav from './nav.tsx'
import Edit from './edit.tsx'
import Details from './details.tsx'
const Routing=()=>
{

    return <div>
        <BrowserRouter>
        <Nav></Nav>
        <Routes>
            <Route path='/' element={<Users/>}> </Route>
            <Route path='/user' element={<Users/>}> </Route>
            <Route path='/add' element={<Add/>}></Route>
            <Route path='/edit/:id' element={<Edit/>}></Route>
            <Route path='/getDet/:id' element={<Details/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>

}
export default Routing