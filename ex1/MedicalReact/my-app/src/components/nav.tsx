import React from 'react'
import { Link } from 'react-router-dom';
const Nav=()=>
{
    return <div>
      
        <nav className="navbar navbar-expand-sm bg-light">

        <nav className="navbar navbar-default">
<div className="container-fluid"> 
  <div className="navbar-header">
    <a className="navbar-brand" href="/">Medical-Center⚕️💊🩺</a>
  </div>
  <ul className="nav navbar-nav">
    <li className="nav-item"><Link to='/add'>add User</Link></li>

    </ul>
  </div>
</nav>
  
</nav>
    </div>
}
export default Nav;