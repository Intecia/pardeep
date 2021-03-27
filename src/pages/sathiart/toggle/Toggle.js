import React, { Fragment} from 'react'
import myimages from './Simages'
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
    style:["Graffiti","Abstract","Fine Art","Pop Art","Surrealism Art"],
    subject:["Nature","Portrait","Animal","Love","Cartoon"],
    medium:["Pencil", "Charcoal","Digital","Ink","Pastel"]
  },
 {
    hname:"Sculpture",
    img:myimages[3],
    style:["Pop Art", "Abstract","Wall","Figurative","Modern"],
    subject:["Body","Still Life","Animal","Architecture","Geometric"],
    medium:["Metal","Bronze","Clay","Glass","Wood"]
  },
   {
    hname:"Prints",
    img:myimages[4],
    style:["Fine Art","Abstract","Art Deco","Pop Art","Folk Art"],
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
    style:["Body","Still Life","Animal","Architecture","Geometric"],
    subject:["b frtrt2","Portraiture","G","Documentary","Conceptual"],
    medium:["Fine Art3","N","Abstract","Documentary","K"]
  },
 {
    hname:"Art Advisory",
    img:myimages[7],
    style:["Pop Art", "Abstract","Wall","Figurative","Modern"],
    subject:["mhtyjt2","jytnhture","Abstract","Documentary","Conceptual"],
    medium:["Fine Art3","HH","Abstract","Docsyytary","MM"]
  }]
       const fil= masterarry.filter((head)=>{
        /*  if(head.hname==="Blog")
         {
            show=false;
            return show;
         } */
           if(head.hname===name)
            return head;
          })

          console.log("master=",fil);
          master=fil;
          /* const aro=()=>{setMaster((prev)=>fil)}; */
          console.log("master",master[0].style);
  return (
    <Fragment>
        {show?<div className='toggle-group'>
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
        </div>:<div></div> }
    </Fragment>
  )
}

export default Toggle
