import React, { Fragment,useState } from 'react'
import {NewNav} from '../newnav/NewNav'
import "./uppersection.css"
const Uppersection = ({DataJson,name,searchInput,handleClick}) => {

  const [nav,setNav]=useState(true); 
 window.onscroll = function (e) {
  
    if(window.scrollY>100)
   {
     console.log("value > 100==",window.scrollY); 
      setNav(false) 
   }
   else if(window.scrollY<100){
    console.log("value < 100==",window.scrollY); 
      setNav(true)
   }
  };

    return (
      <Fragment>
        {nav?<section className="showcase">
        <div className="container">
          <p className="logo-text">{DataJson.logo}</p>
          <div className="info">
            <h4>{DataJson.heading}</h4>
            <p>{DataJson.desc}</p>
            <input
              type="text"
              onChange={(e) => {
                searchInput(e);
              }}
              value={name}
              placeholder="Photo and videos"
            ></input>
            <button type="button" className="btn" onClick={handleClick}>
              Search
            </button>
          </div>
        </div>
      </section>:<NewNav/>}
      </Fragment>
    )
}

export default Uppersection
