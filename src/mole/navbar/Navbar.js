import React,{useState} from 'react'
import logo from '../../assets/sa-logo.svg'
import './navbar.css'
const Navbar = () => {

    const [navItems ,setNavItem]=useState(['Panting','Photography','Drawings','Sculpture','Prints','Features','Blog','Art Advisory'])

    return (
        <>
             <div className='hr-line'></div>
            <nav id='nav-bar'>
                
                <div className="logo">
                    <img src={logo} alt="image not available" className='logo'></img>
                </div>
                <div className="container-sa">
                    <ul className='nav-item-group'>
                            {navItems.map((item)=>{
                                return  <li className='nav-link'><a className='nav-item'>{item}</a></li>
                            })}
                    </ul>
                </div>
                <input type="text" placeholder="Enter Text" className='search-box'></input>
            </nav>
            <div className='hr-line'></div>
        </>
    )
}

export default Navbar
