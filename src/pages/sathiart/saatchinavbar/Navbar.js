import React,{useState} from 'react'
import logo from '../../../assets/sa-logo.svg'
import Toggle from '../../sathiart/toggle/Toggle'
import './navbar.css'
const Navbar = () => {
const [show ,setShow]=useState(false);
const [name,setName]=useState('');
    
    const [navItems ,setNavItem]=useState(['Painting','Photography','Drawings','Sculpture','Prints','Features','Blog','Art Advisory'])
    const showToggle=(e)=>{
        let n1=e.target.tagName;
        
        if(n1==='A'){
            setShow(true);
            setName(e.target.innerText);
        }
        else{
            setShow(false);
        }
    }
   /*  const showToggle2=(e)=>{
        let n2=e.target.tagName;
        console.log(n2);
    } */
    return (
        <>
             <div className='hr-line'></div>
            <nav id='nav-bar'>
                
                <div className="logo">
                    <img src={logo} alt="image not available" className='logo'></img>
                </div>
{/* {show?<p>TRUE</p>:<p>FALSE</p>} */}

                <div className="container-sa">
                    <ul className='nav-item-group'>
                            {navItems.map((item)=>{
                                return  <li onMouseOver={showToggle} className='nav-link'><a onMouseOver={showToggle} className='nav-item'>{item}</a></li>
                            })}
                    </ul>
                </div>
                <input type="text" placeholder="Enter Text" className='search-box'></input>
                
            </nav>
            
            <div className='nav-hr-line'></div>
            {show?<div className="toggle"><Toggle show={show} name={name}/></div>:null} 
           
        </>
    )
}

export default Navbar
