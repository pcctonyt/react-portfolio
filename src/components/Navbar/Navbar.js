import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-dark'>
      <div className='container'>
        <a className='navbar-brand' href='#'>Click Me
         {/* <img className='logo' src="./components/Navbar/office.jpg" /> */} 
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <FontAwesomeIcon icon={faBars} style={{ color: '#fff' }} />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav mx-auto'>
            <li className='nav-item'>
              <a className='nav-link' aria-current='page' href='#'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                About Deterrence
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Skills
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                How I Work
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Portfolio
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar