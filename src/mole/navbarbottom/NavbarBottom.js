import React from 'react'
import './navbarbottom.css'
const NavbarBottom=({photoClick})=>{
  console.log("hello");

return(
<section className="main">
        <div className="container">
          <div className="heading">
            <ul className="p-main-heading">

              <li className='p-heading-list'>
               <input type="radio" name="radio" className="radio-btn" id="idinput1"/> 
                <label onClick={photoClick} className="label-item" for="idinput1">Photos</label>
                </li>

               <li className='p-heading-list'>
                <input type="radio" name="radio" className="radio-btn" id="idinput2"/> 
                <label onClick={photoClick} className="label-item" for="idinput2">Videos</label>
                </li>

              <li className='p-heading-list'>
                <input type="radio" name="radio" className="radio-btn" id="idinput3"/>
                <label onClick={photoClick} className="label-item" for="idinput3">Favourites</label>
                </li> 
                                  

              {/* <li className='p-heading-list'><label htmlFor="chkbox2" onClick={photoClick} className="p-heading-link">Videos</label><input type="checkbox" id="chkbox2"/> </li>


              <li className='p-heading-list'><laebl htmlFor="chkbox3" className="p-heading-link">Favourites</laebl><input type="checkbox" id="chkbox3"/> </li> */}
            </ul>
          </div>
          <div className="p1-hr-line"></div> 
        </div>
      </section>
)
}
export default NavbarBottom