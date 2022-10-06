import React from 'react'


export default function Nav(props) {


  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <a className="navbar-brand" href="#">   National Fuel Pass</a>
  

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Register</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/Displayuser">Signin</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/Scanqr">Scan QR Code</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/Adminpage">Admin</a>
      </li>

      
      <li className="nav-item dropdown">
       
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
     
    </ul>
   
  </div>
</nav>
  )
}



