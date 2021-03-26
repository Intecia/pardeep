import React, { Fragment,useState} from 'react'
import img1 from '../../../assets/img1.jpg'
import img2 from '../../../assets/img2.jpg'
import './toggle.css'
const Toggle=({show,name})=>{
  const [master,setMaster]=useState();



 const masterarry=[ 
   {
    hname:"Painting",
    style:["Fine Art1","Portraiture","Abstract","Documentary","Conceptual"],
    subject:["Fine Art2","Portraiture","Abstract","Documentary","Conceptual"],
    medium:["Fine Art3","Portraiture","Abstract","Documentary","Conceptual"]
  },
 {
    hname:"Photography",
    style:["Fine Art1","Portraiture","Abstract","Documentary","Conceptual"],
    subject:["Fine Art2","Portraiture","Abstract","Documentary","Conceptual"],
    medium:["Fine Art3","Portraiture","Abstract","Documentary","Conceptual"]
  }]
        masterarry.map((head)=>{
          console.log(head.hname);
          console.log(head);
          if(head.hname===name)
          {console.log(head);
            return setMaster(head);
          }
          
          
          /* if(head.painting.hname===name)
            return setMaster(head);
           if(head.photography.hname===name)
            return setMaster(head); */
          })
  return (
    <Fragment>
       {/*  <div className='toggle-group'>
          <div className="toggle-container">
          <img src={img2} alt='toggle-Image'className='toggle-img' width='300px' height='300px'/>
        <div className='info-1'>
          <p className='t-heading'>Style</p>
          <ul className="list-ul">
          {painting.style.map((item)=>{
            return <li className="list-li">{item}</li>
          })}
          </ul>
        </div>
        <div className='info-1'>
        <p className='t-heading'>Subject</p>
          <ul className="list-ul">
          {painting.subject.map((item)=>{
            return <li className="list-li">{item}</li>
          })}
          </ul>
        </div>
        <div className='info-1'>
        <p className='t-heading'>Medium</p>
          <ul className="list-ul">
          {painting.medium.map((item)=>{
            return <li className="list-li">{item}</li>
          })}
          </ul>
        </div>
        </div>
        </div> */}
    </Fragment>
  )
}

export default Toggle
