import React from 'react'
import styles from './navbar.module.css'
export default function Navbar() {
  return (
    <>
    <nav className={` ${styles.navbar} navbar navbar-expand-lg fixed-top p-4`} id='navbar'>
  <div className="container">
    <a className="navbar-brand text-white" href="#Hero">Start Bootstrap
</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item ">
          <a className="nav-link text-white active" aria-current="page" href="#">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">About</a>
        </li>
         <li className="nav-item">
          <a className="nav-link text-white" href="#">Contact</a>
        </li>
       
       
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}
