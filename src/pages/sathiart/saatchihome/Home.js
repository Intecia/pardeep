import React, { Fragment, useState, useEffect } from "react";
import Footer from "../../../mole/footer/Footer";
import Navbar from "../saatchinavbar/Navbar";
import axios from "axios";
import "./Home.css";
function Home() {
  const[result ,setResult]=useState([]);
  useEffect(() => {
    axios
      .get("https://collectionapi.metmuseum.org/public/collection/v1/objects/8")
      .then((res) => {
        setResult([res.data]);
      })
      .catch((err) => {
        console.log("something WRONG");
      });
  }, []);
  console.log("helooo",result);
  return (
   <Fragment>
      <Navbar />
       <div className="main-section">
      <div className="main-container">
       {result.map((item)=>{return <div className="card">
              <div className="itm repo">{item.repository}</div>
              <div className='hr-main-line'></div>
                        <div className='itm department'>department:{item.department}</div>

                        <div className='itm year'>Year:{item.accessionYear}</div>

                         <div className='itm title'>{item.title}</div>

                        <div className='itm term'>{item.tags[0].term}</div>
                    
                        <div className='itm url'>AAT_URL:{item.tags[0].AAT_URL}</div>

                        <div className='itm wiki'>Wikidata:{item.tags[0].Wikidata_URL}</div>
                        
                        <div className='itm creditLine'>Credi{item.creditLine}</div> 
                  
              </div>
                })}
                </div>
        </div>
      <Footer /> 
   </Fragment>
  )
}

export default Home;
