import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


const Navbar = ({OpenSidebar}) => {
  return (
    <div>
      <nav className='nav'>
       <h1>Hello Shahrukh✋,</h1>
       <FontAwesomeIcon icon={faBars} className='bars' onClick={OpenSidebar}/>
       <div className="input-box">
       <FontAwesomeIcon icon={faSearch} className='icon-search'/>
        <input type="search" placeholder='Search' className='input' />
       </div>
      </nav>
    </div>
  )
}

export default Navbar