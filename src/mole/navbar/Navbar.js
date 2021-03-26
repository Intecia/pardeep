import React,{useState} from 'react'
import logo from '../../assets/sa-logo.svg'
import './navbar.css'
const Navbar = () => {
const [show ,setShow]=useState(true);
    
    const [navItems ,setNavItem]=useState(['Panting','Photography','Drawings','Sculpture','Prints','Features','Blog','Art Advisory'])

    return (
        <>
             <div className='hr-line'></div>
            <nav id='nav-bar'>
                
                <div className="logo" onMouseOver={()=>{setShow(!show)}}>
                    <img src={logo} alt="image not available" className='logo'></img>
                </div>
{/* {show?<p>TRUE</p>:<p>FALSE</p>} */}

                <div className="container-sa">
                    <ul className='nav-item-group'>
                            {navItems.map((item)=>{
                                return  <li  className='nav-link'><a onMouseOver={()=>{setShow(!show)}} className='nav-item'>{item}</a></li>
                            })}
                    </ul>
                </div>
                <input type="text" placeholder="Enter Text" className='search-box'></input>
                
            </nav>
            <div className='nav-hr-line'></div> 
           {show?<div className="toggle">HELOO Pardeep</div>:null}
        </>
    )
}

export default Navbar
