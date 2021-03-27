import React, { Fragment,useState} from 'react'
import img1 from '../../../assets/img1.jpg'
import img2 from '../../../assets/img2.jpg'
import myimages from './Simages'
import Simages from './Simages'
import './toggle.css'
const Toggle=({show,name})=>{
  let master={};

console.log(myimages[3]);

 const masterarry=[ 
   {
    hname:"Painting",
    img:myimages[0],
    style:["Fine Art", "Abstract","Modern","Street Art","Pop Art"],
    subject:["Portrait","Landscape","Still Life","Nature","Beach"],
    medium:["Oil","Watercolor","Acrylic","Airbrush", "Digital"]
  },
 {
    hname:"Photography",
    img:myimages[1],
    style:["Fine Art","Portraiture","Abstract","Documentary","Conceptual"],
    subject:["Landscape","Portrait", "Nature","Still Life","Nude"],
    medium:["Digital","Black and White", "Color","C-type","Digital"]
  },
   {
    hname:"Drawings",
    img:myimages[2],
    style:["Fine Art", "Abstract","Modern","Street Art","Pop Art"],
    subject:["Portrait","Landscape","Still Life","Nature","Beach"],
    medium:["Oil","Watercolor","Acrylic","Airbrush", "Digital"]
  },
 {
    hname:"Sculpture",
    img:myimages[3],
    style:["O","P","Q","R","S"],
    subject:["T","U","V","W","X"],
    medium:["Y","Z","1","2","3"]
  },
   {
    hname:"Prints",
    img:myimages[4],
    style:["4","5","6","7","8"],
    subject:["Fine Art2","Portraiture","Abstract","Documentary","Conceptual"],
    medium:["Fine Art3","Portraiture","Abstract","Documentary","Conceptual"]
  },
 {
    hname:"Features",
    img:myimages[5],
    style:["Fine Art1","Portraiture","Abstract","Documentary","Conceptual"],
    subject:["Fine Art2","Portraiture","Abstract","Documentary","Conceptual"],
    medium:["Fine Art3","Portraiture","Abstract","Documentary","Conceptual"]
  },
   {
    hname:"Blog",
    img:myimages[6],
    style:["A","B","B","Documentary","Conceptual"],
    subject:["b frtrt2","Portraiture","G","Documentary","Conceptual"],
    medium:["Fine Art3","N","Abstract","Documentary","K"]
  },
 {
    hname:"Art Advisory",
    img:myimages[7],
    style:["AAA","G","Abstract","P","A"],
    subject:["mhtyjt2","jytnhture","Abstract","Documentary","Conceptual"],
    medium:["Fine Art3","HH","Abstract","Docsyytary","MM"]
  }]
       const fil= masterarry.filter((head)=>{
          /* console.log(head.hname);
          console.log(name); 
          console.log("head=",head);
          if(head.hname===name)
          {
            console.log("inside if=",head);
            return ()=>{setMaster(head)};
          }*/
           if(head.hname===name)
            return head;
          })
          console.log("master=",fil);
          master=fil;
          /* const aro=()=>{setMaster((prev)=>fil)}; */
          console.log("master",master[0].style);
  return (
    <Fragment>
        <div className='toggle-group'>
          <div className="toggle-container">
            <div className="img-div">
          <img src={master[0].img} alt='toggle-Image'className='toggle-img' width='300px' height='300px'/><p className="text-div">Featured Paintings</p></div>
        <div className='info-1'>
          <p className='t-heading'>Style</p>
          <ul className="list-ul">
          {master[0].style.map((item)=>{
            return <li className="list-li">{item}</li>
          })}
          </ul>
        </div>
         <div className='info-1'>
        <p className='t-heading'>Subject</p>
          <ul className="list-ul">
          {master[0].subject.map((item)=>{
            return <li className="list-li">{item}</li>
          })}
          </ul>
        </div>
        <div className='info-1'>
        <p className='t-heading'>Medium</p>
          <ul className="list-ul">
          {master[0].medium.map((item)=>{
            return <li className="list-li">{item}</li>
          })}
          </ul>
        </div> 
        </div>
        </div> 
    </Fragment>
  )
}

export default Toggle
