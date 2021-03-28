import React,{Fragment,useState} from 'react'
import logo from '../../assets/Logo-scroll.png'
import './newnav.css'
const NewNav=()=>{
const [names,setNames]=useState(false);


 {window.addEventListener('scroll', event => {
    console.log(window.scrollY); 
 if(window.scrollY===100)
 {
   console.log("BBBBBBBBBBBBBBBBBB"); 
   setNames(false)
 }
 else{
  /* console.log("C"); */
   setNames(true)
 }
  /* console.log(window.scrollX) */
})}
  return(
    <Fragment>
     
    {names?
      <nav className="navbar2">
        <div className='container2'>
        <div>
          <img src={logo} alt="Logo Missing" width="150px" height="60px" className="logo2"/>
          </div>
          <div className="input-group">
            <input type="text" className="search-box" placeholder="Search photos,videos,artist"/>
              <input type="submit" value="SEARCH" className="search-btn2"/>
              </div>
              </div>
        </nav>:<div className="dummy"></div>}
    </Fragment>
  )
}

export default NewNav