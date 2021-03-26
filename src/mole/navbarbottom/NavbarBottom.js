import React from 'react'
import './navbarbottom.css'
const NavbarBottom=({photoClick})=>{
return(
<section className="main">
        <div className="container">
          <div className="heading">
            <ul className="p-main-heading">
              <li className='p-heading-list'><a href='#' onClick={photoClick}className="p-heading-link">Photos</a></li>
              <li className='p-heading-list'><a href='#' onClick={photoClick} className="p-heading-link">Videos</a></li>
              <li className='p-heading-list'><a href='#' className="p-heading-link">Favourites</a></li>
            </ul>
          </div>
          <div className="p-hr-line"></div> 
        </div>
      </section>
)
}
export default NavbarBottom